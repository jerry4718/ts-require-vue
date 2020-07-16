declare module "*.html" {
    const content: string;
    export default content;
}
declare module "text!*" {
    const html: string;
    export default html;
}