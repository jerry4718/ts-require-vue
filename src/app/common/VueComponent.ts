export function VueComponent<T extends Vue.Component>(component: T): T {
    return component;
}