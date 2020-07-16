import Vue from 'vue';
import {Component, Watch} from "vue-property-decorator";
import * as api from "../../common/api/api";
/// @ts-ignore
import template = require("text!./main.html");
import "css!./main.css";
import {MenuProto} from "../../model/MenuProto";
import PageHeadNav from "../page-head-nav/page-head-nav";
import SubMenuNav from "../sub-menu-nav/sub-menu-nav";
import RouteMenuNav from "../route-menu-nav/route-menu-nav";

let routesUnique = [];

@Component({
    // name: 'main',
    template: template,
    components: {
        PageHeadNav,
        SubMenuNav,
        RouteMenuNav,
    }
})
export default class Main extends Vue {
    curTabMenuId: number = 0;
    curSubMenuId: number = 0;
    curRouteMenuId: number = 0;
    tabMenus: MenuProto[] = [];
    subMenus: MenuProto[] = [];
    routeMenus: MenuProto[] = [];

    async mounted() {
        let res = await api.menuList({parentId: 0});

        this.tabMenus = res && res.data || [{}];
        if (this.tabMenus.length) {
            this.curTabMenuId = this.tabMenus[0].id;
        }
    }

    @Watch('curTabMenuId')
    async onCurTabMenuIdChange(newId) {
        this.subMenus = [];
        this.routeMenus = [];
        let res = await api.menuList({parentId: newId});

        this.subMenus = res && res.data || [];
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

        this.routeMenus = res && res.data || [];
        subMenu.routeMenus = this.routeMenus;
    }

    tapNav(menuId) {
        this.curTabMenuId = menuId;
        console.log(menuId);
    }

    tapSubNav(menuId) {
        this.curSubMenuId = menuId;
        console.log(menuId);
    }

    async tapRouteNav({id: menuId, moduleUrl}) {
        if (this.curRouteMenuId === menuId) {
            // todo: 这里做当前页面刷新的处理，emit或者notify
            return;
        }
        this.curRouteMenuId = menuId;
        console.log(menuId);

        const routeName = `route_${menuId}`;

        // 如果是第一次调用，这里会动态注册路由
        await this.routeRegister({
            id: menuId,
            url: moduleUrl,
            name: routeName,
            ns: [this.curTabMenuId, this.curSubMenuId, menuId],
        });
        // 跳转路由
        await this.$router.push({name: routeName});
    }


    parseModulePath(modulePath) {
        // todo：这里可以指定哪些页面是path参数的，这个配置需要从文件中分离
        const cfg = [
            '/config/thirdConfigList',
        ];
        for (let match of cfg) {
            if (modulePath.indexOf(match) === 0) {
                modulePath = match;
            }
        }
        return `/app/pages${modulePath}/${modulePath.split(/\//g).pop()}.js`;
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
        const moduleObject = await import(moduleUrl);

        this.$router.addRoutes([{
            path,
            name,
            component: {
                data() {
                    // todo 我不知道为什么每次切换route这个extendStamp会刷新
                    return {extendStamp: Date.now()}
                },
                render(h) {
                    return h(
                        'div',
                        {'class': {'route-content': true}},
                        [
                            // @ts-ignore
                            h('div', {'class': {'route-path': true}}, `path: ${path}, ${this.extendStamp}`),
                            h('div', {'class': {'route-template': true}},
                                moduleObject ? [h(moduleObject.default)] : [`Not Found: ${moduleUrl}`],
                            ),
                        ],
                    );
                },
            },
            meta: {
                keepAlive: true, //需要被缓存的组件
            },
        }]);
    }
}