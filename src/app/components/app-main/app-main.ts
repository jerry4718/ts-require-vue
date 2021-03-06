import Vue from 'vue';
import {Component, Watch} from "vue-property-decorator";
import * as api from "../../common/api/api";
/// @ts-ignore
import template = require("text!./app-main.html");
import "css!./app-main.css";
import {MenuProto} from "../../model/MenuProto";
import PageHeadNav from "../page-head-nav/page-head-nav";
import SubMenuNav from "../sub-menu-nav/sub-menu-nav";
import RouteMenuNav from "../route-menu-nav/route-menu-nav";
import FaIcon from "../fa-icon/fa-icon";

const routesUnique = [];

@Component({
    name: 'AppMain',
    template: template,
    components: {
        PageHeadNav,
        SubMenuNav,
        RouteMenuNav,
        FaIcon,
    }
})
export default class AppMain extends Vue {
    curTabMenuId: number = 0;
    curSubMenuId: number = 0;
    curRouteMenuId: number = 0;
    tabMenus: MenuProto[] = [];
    subMenus: MenuProto[] = [];
    routeMenus: MenuProto[] = [];

    aliveRoutes = {
        'index-main': {
            id: 0,
            moduleName: "我的主页",
            moduleDescribe: "信息一览",
            moduleSequence: 1,
            moduleIcon: "icon-home"
        }
    };
    showingAlive = '';

    keepAliveNames = ['index-main'];
    keepAliveHistories = ['index-main'];

    get keepAliveIncludes() {
        return this.keepAliveNames.join(',');
    }

    async removeKeepAlive(routeName: string) {
        //阻止向上冒泡
        window.event.stopPropagation();
        console.log(`removeKeepAliveName(${routeName})`)
        if (routeName === 'index-main') {
            return;
        }
        if (this.keepAliveNames.indexOf(routeName) !== -1) {
            this.keepAliveNames = this.keepAliveNames.filter(name => name !== routeName);
            this.keepAliveHistories = this.keepAliveHistories.filter(name => name !== routeName);

            const aliveRouteName = this.keepAliveHistories[this.keepAliveHistories.length - 1];
            const aliveRouteObject = this.aliveRoutes[aliveRouteName];
            await this.tapRouteNav(aliveRouteObject);
        }
    }

    toArray(list) {
        const slice = Array.prototype.slice;
        return slice.call(list);
    }

    pushKeepAlive(routeName: string) {
        console.log(`pushKeepAliveNames(${routeName})`)
        this.keepAliveHistories = this.keepAliveHistories.filter(name => name !== routeName);
        this.keepAliveHistories = this.keepAliveHistories.concat([routeName]);

        if (this.keepAliveNames.indexOf(routeName) === -1) {
            this.keepAliveNames = this.keepAliveNames.concat([routeName]);
        }
    }

    async mounted() {
        let res = await api.menuList({parentId: 0});

        this.tabMenus = res?.data ?? [];
        if (this.tabMenus.length) {
            this.curTabMenuId = this.tabMenus[0].id;
        }
        await this.$router.push({name: 'index-main'})
    }

    @Watch('curTabMenuId')
    async onCurTabMenuIdChange(newId) {
        this.subMenus = [];
        this.routeMenus = [];
        let res = await api.menuList({parentId: newId});

        this.subMenus = res?.data ?? [];
        if (this.subMenus.length) {
            this.curSubMenuId = this.subMenus[0].id;
        }
    }

    @Watch('curSubMenuId')
    async onCurSubMenuIdChange(newId) {
        this.routeMenus = [];
        let sdx = this.subMenus.findIndex(s => s.id === newId);
        let subMenu = this.subMenus[sdx];

        if (subMenu.routeMenus && subMenu.routeMenus.length) {
            this.routeMenus = subMenu.routeMenus;
            return;
        }
        let res = await api.menuList({parentId: newId});

        this.routeMenus = res?.data ?? [];
        subMenu.routeMenus = this.routeMenus;
    }


    @Watch('$route')
    watchRoute(to) {
        this.showingAlive = to.name;
        this.aliveRoutes[to.name] = {...this.aliveRoutes[to.name] ?? {}, $like: to};
    }


    tapNav(menuId) {
        this.curTabMenuId = menuId;
    }

    tapSubNav(menuId) {
        this.curSubMenuId = menuId;
    }

    async tapRouteNav(moduleFields) {
        const {id: menuId, moduleUrl} = moduleFields;
        if (this.curRouteMenuId === menuId) {
            return;
        }
        this.curRouteMenuId = menuId;
        if (menuId === 0) {
            await this.$router.push({name: 'index-main'});
            return
        }

        const routeName = `route_${menuId}`;
        this.aliveRoutes[routeName] = moduleFields;

        // 如果是第一次调用，这里会动态注册路由
        await this.routeRegister({
            id: menuId,
            url: moduleUrl,
            name: routeName,
            ns: [this.curTabMenuId, this.curSubMenuId, menuId],
        });

        this.pushKeepAlive(routeName);
        // 跳转路由
        await this.$router.push({name: routeName});

        this.toArray(document.getElementsByClassName("route-history-item"))
            .forEach(elem => {
                if (this.toArray(elem.classList).indexOf('selected') > -1) {
                    elem.scrollIntoView();
                }
            });
    }

    parseModulePath(modulePath) {
        // 可以在这里指定哪些页面是公用模板的
        // todo: 这个配置可以修改为通过后台配置
        const cfg = [
            '/config/thirdConfigList',
        ];
        for (let match of cfg) {
            if (modulePath.indexOf(match) === 0) {
                modulePath = match;
            }
        }
        return `../../pages${modulePath}/${modulePath.split(/\//g).pop()}.js?_=${Date.now()}`;
    };

    async routeRegister({id: menuId, url, name, ns}) {
        if (routesUnique.indexOf(menuId) > -1) {
            return;
        }
        routesUnique.push(menuId);

        const path = `${url.replace(/^(\/|)/, '/')}${url.indexOf('?') > -1 ? '&' : '?'}rel=${ns.join('.')}`;

        const modulePath = path.split('?')[0];
        const moduleUrl = this.parseModulePath(modulePath);

        console.log(modulePath);
        console.log(moduleUrl);


        // 使用import()动态加载component
        const {default: moduleObject, default: {options: {name: componentName}}} = await import(moduleUrl);

        @Component({
            name,
            components: {[componentName]: moduleObject},
            template: `
                    <div>
                        <div class="route-path">path: {{path}}, {{refreshStamp}}</div>
                        <div class="route-template">
                            <${componentName}></${componentName}>
                        </div>
                    </div>
                `,

            created: () => console.log(`created: ${path}`),
            mounted: () => console.log(`mounted: ${path}`),
            destroyed: () => console.log(`destroyed: ${path}`),
            /*render(h) {
                return h(
                    'div',
                    [
                        h('div', {'class': {'route-path': true}}, `path: ${path}, ${this.refreshStamp}`),
                        h('div', {'class': {'route-template': true}},
                            [moduleObject ? h(moduleObject.default) : `Not Found: ${moduleUrl}`],
                        ),
                    ],
                );
            },*/
        })
        class AnonymousComponent extends Vue {
            path: string = path;
            // 放入keep-alive中，才可以保存component实例的状态，否则在每次切换路由时会刷新refreshStamp
            refreshStamp: number = Date.now();
        }

        this.$router.addRoutes([{
            path,
            name,
            component: AnonymousComponent,
            meta: {
                keepAlive: true, //需要被缓存的组件
            },
        }]);
    }
}