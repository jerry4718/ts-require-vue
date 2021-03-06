import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./fa-icon.css";

@Component({
    name: 'FaIcon',
    template: `<i class="fa" @click="$emit('click')" v-html="code"></i>`
})
export default class FaIcon extends Vue {
    @Prop({type: String, required: true}) name!: string;

    get code() {
        let matched = FaIcon.icons.filter(icon => icon.name === this.name);
        if (!matched.length) {
            throw Error(`icon name "${this.name}" has not defined`);
        }
        return matched.pop()?.code;
    }

    static icons = [
        {name: 'icon-glass', code: '&#xf000;'},
        {name: 'icon-music', code: '&#xf001;'},
        {name: 'icon-search', code: '&#xf002;'},
        {name: 'icon-envelope', code: '&#xf003;'},
        {name: 'icon-heart', code: '&#xf004;'},
        {name: 'icon-star', code: '&#xf005;'},
        {name: 'icon-star-empty', code: '&#xf006;'},
        {name: 'icon-user', code: '&#xf007;'},
        {name: 'icon-film', code: '&#xf008;'},
        {name: 'icon-th-large', code: '&#xf009;'},
        {name: 'icon-th', code: '&#xf00a;'},
        {name: 'icon-th-list', code: '&#xf00b;'},
        {name: 'icon-ok', code: '&#xf00c;'},
        {name: 'icon-remove', code: '&#xf00d;'},
        {name: 'icon-zoom-in', code: '&#xf00e;'},
        {name: 'icon-zoom-out', code: '&#xf010;'},
        {name: 'icon-off', code: '&#xf011;'},
        {name: 'icon-signal', code: '&#xf012;'},
        {name: 'icon-cog', code: '&#xf013;'},
        {name: 'icon-trash', code: '&#xf014;'},
        {name: 'icon-home', code: '&#xf015;'},
        {name: 'icon-file', code: '&#xf016;'},
        {name: 'icon-time', code: '&#xf017;'},
        {name: 'icon-road', code: '&#xf018;'},
        {name: 'icon-download-alt', code: '&#xf019;'},
        {name: 'icon-download', code: '&#xf01a;'},
        {name: 'icon-upload', code: '&#xf01b;'},
        {name: 'icon-inbox', code: '&#xf01c;'},
        {name: 'icon-play-circle', code: '&#xf01d;'},
        {name: 'icon-repeat', code: '&#xf01e;'},
        {name: 'icon-refresh', code: '&#xf021;'},
        {name: 'icon-list-alt', code: '&#xf022;'},
        {name: 'icon-lock', code: '&#xf023;'},
        {name: 'icon-flag', code: '&#xf024;'},
        {name: 'icon-headphones', code: '&#xf025;'},
        {name: 'icon-volume-off', code: '&#xf026;'},
        {name: 'icon-volume-down', code: '&#xf027;'},
        {name: 'icon-volume-up', code: '&#xf028;'},
        {name: 'icon-qrcode', code: '&#xf029;'},
        {name: 'icon-barcode', code: '&#xf02a;'},
        {name: 'icon-tag', code: '&#xf02b;'},
        {name: 'icon-tags', code: '&#xf02c;'},
        {name: 'icon-book', code: '&#xf02d;'},
        {name: 'icon-bookmark', code: '&#xf02e;'},
        {name: 'icon-print', code: '&#xf02f;'},
        {name: 'icon-camera', code: '&#xf030;'},
        {name: 'icon-font', code: '&#xf031;'},
        {name: 'icon-bold', code: '&#xf032;'},
        {name: 'icon-italic', code: '&#xf033;'},
        {name: 'icon-text-height', code: '&#xf034;'},
        {name: 'icon-text-width', code: '&#xf035;'},
        {name: 'icon-align-left', code: '&#xf036;'},
        {name: 'icon-align-center', code: '&#xf037;'},
        {name: 'icon-align-right', code: '&#xf038;'},
        {name: 'icon-align-justify', code: '&#xf039;'},
        {name: 'icon-list', code: '&#xf03a;'},
        {name: 'icon-indent-left', code: '&#xf03b;'},
        {name: 'icon-indent-right', code: '&#xf03c;'},
        {name: 'icon-facetime-video', code: '&#xf03d;'},
        {name: 'icon-picture', code: '&#xf03e;'},
        {name: 'icon-pencil', code: '&#xf040;'},
        {name: 'icon-map-marker', code: '&#xf041;'},
        {name: 'icon-adjust', code: '&#xf042;'},
        {name: 'icon-tint', code: '&#xf043;'},
        {name: 'icon-edit', code: '&#xf044;'},
        {name: 'icon-share', code: '&#xf045;'},
        {name: 'icon-check', code: '&#xf046;'},
        {name: 'icon-move', code: '&#xf047;'},
        {name: 'icon-step-backward', code: '&#xf048;'},
        {name: 'icon-fast-backward', code: '&#xf049;'},
        {name: 'icon-backward', code: '&#xf04a;'},
        {name: 'icon-play', code: '&#xf04b;'},
        {name: 'icon-pause', code: '&#xf04c;'},
        {name: 'icon-stop', code: '&#xf04d;'},
        {name: 'icon-forward', code: '&#xf04e;'},
        {name: 'icon-fast-forward', code: '&#xf050;'},
        {name: 'icon-step-forward', code: '&#xf051;'},
        {name: 'icon-eject', code: '&#xf052;'},
        {name: 'icon-chevron-left', code: '&#xf053;'},
        {name: 'icon-chevron-right', code: '&#xf054;'},
        {name: 'icon-plus-sign', code: '&#xf055;'},
        {name: 'icon-minus-sign', code: '&#xf056;'},
        {name: 'icon-remove-sign', code: '&#xf057;'},
        {name: 'icon-ok-sign', code: '&#xf058;'},
        {name: 'icon-question-sign', code: '&#xf059;'},
        {name: 'icon-info-sign', code: '&#xf05a;'},
        {name: 'icon-screenshot', code: '&#xf05b;'},
        {name: 'icon-remove-circle', code: '&#xf05c;'},
        {name: 'icon-ok-circle', code: '&#xf05d;'},
        {name: 'icon-ban-circle', code: '&#xf05e;'},
        {name: 'icon-arrow-left', code: '&#xf060;'},
        {name: 'icon-arrow-right', code: '&#xf061;'},
        {name: 'icon-arrow-up', code: '&#xf062;'},
        {name: 'icon-arrow-down', code: '&#xf063;'},
        {name: 'icon-share-alt', code: '&#xf064;'},
        {name: 'icon-resize-full', code: '&#xf065;'},
        {name: 'icon-resize-small', code: '&#xf066;'},
        {name: 'icon-plus', code: '&#xf067;'},
        {name: 'icon-minus', code: '&#xf068;'},
        {name: 'icon-asterisk', code: '&#xf069;'},
        {name: 'icon-exclamation-sign', code: '&#xf06a;'},
        {name: 'icon-gift', code: '&#xf06b;'},
        {name: 'icon-leaf', code: '&#xf06c;'},
        {name: 'icon-fire', code: '&#xf06d;'},
        {name: 'icon-eye-open', code: '&#xf06e;'},
        {name: 'icon-eye-close', code: '&#xf070;'},
        {name: 'icon-warning-sign', code: '&#xf071;'},
        {name: 'icon-plane', code: '&#xf072;'},
        {name: 'icon-calendar', code: '&#xf073;'},
        {name: 'icon-random', code: '&#xf074;'},
        {name: 'icon-comment', code: '&#xf075;'},
        {name: 'icon-magnet', code: '&#xf076;'},
        {name: 'icon-chevron-up', code: '&#xf077;'},
        {name: 'icon-chevron-down', code: '&#xf078;'},
        {name: 'icon-retweet', code: '&#xf079;'},
        {name: 'icon-shopping-cart', code: '&#xf07a;'},
        {name: 'icon-folder-close', code: '&#xf07b;'},
        {name: 'icon-folder-open', code: '&#xf07c;'},
        {name: 'icon-resize-vertical', code: '&#xf07d;'},
        {name: 'icon-resize-horizontal', code: '&#xf07e;'},
        {name: 'icon-bar-chart', code: '&#xf080;'},
        {name: 'icon-twitter-sign', code: '&#xf081;'},
        {name: 'icon-facebook-sign', code: '&#xf082;'},
        {name: 'icon-camera-retro', code: '&#xf083;'},
        {name: 'icon-key', code: '&#xf084;'},
        {name: 'icon-cogs', code: '&#xf085;'},
        {name: 'icon-comments', code: '&#xf086;'},
        {name: 'icon-thumbs-up', code: '&#xf087;'},
        {name: 'icon-thumbs-down', code: '&#xf088;'},
        {name: 'icon-star-half', code: '&#xf089;'},
        {name: 'icon-heart-empty', code: '&#xf08a;'},
        {name: 'icon-signout', code: '&#xf08b;'},
        {name: 'icon-linkedin-sign', code: '&#xf08c;'},
        {name: 'icon-pushpin', code: '&#xf08d;'},
        {name: 'icon-external-link', code: '&#xf08e;'},
        {name: 'icon-signin', code: '&#xf090;'},
        {name: 'icon-trophy', code: '&#xf091;'},
        {name: 'icon-github-sign', code: '&#xf092;'},
        {name: 'icon-upload-alt', code: '&#xf093;'},
        {name: 'icon-lemon', code: '&#xf094;'},
        {name: 'icon-phone', code: '&#xf095;'},
        {name: 'icon-check-empty', code: '&#xf096;'},
        {name: 'icon-bookmark-empty', code: '&#xf097;'},
        {name: 'icon-phone-sign', code: '&#xf098;'},
        {name: 'icon-twitter', code: '&#xf099;'},
        {name: 'icon-facebook', code: '&#xf09a;'},
        {name: 'icon-github', code: '&#xf09b;'},
        {name: 'icon-unlock', code: '&#xf09c;'},
        {name: 'icon-credit-card', code: '&#xf09d;'},
        {name: 'icon-rss', code: '&#xf09e;'},
        {name: 'icon-hdd', code: '&#xf0a0;'},
        {name: 'icon-bullhorn', code: '&#xf0a1;'},
        {name: 'icon-bell', code: '&#xf0a2;'},
        {name: 'icon-certificate', code: '&#xf0a3;'},
        {name: 'icon-hand-right', code: '&#xf0a4;'},
        {name: 'icon-hand-left', code: '&#xf0a5;'},
        {name: 'icon-hand-up', code: '&#xf0a6;'},
        {name: 'icon-hand-down', code: '&#xf0a7;'},
        {name: 'icon-circle-arrow-left', code: '&#xf0a8;'},
        {name: 'icon-circle-arrow-right', code: '&#xf0a9;'},
        {name: 'icon-circle-arrow-up', code: '&#xf0aa;'},
        {name: 'icon-circle-arrow-down', code: '&#xf0ab;'},
        {name: 'icon-globe', code: '&#xf0ac;'},
        {name: 'icon-wrench', code: '&#xf0ad;'},
        {name: 'icon-tasks', code: '&#xf0ae;'},
        {name: 'icon-filter', code: '&#xf0b0;'},
        {name: 'icon-briefcase', code: '&#xf0b1;'},
        {name: 'icon-fullscreen', code: '&#xf0b2;'},
        {name: 'icon-group', code: '&#xf0c0;'},
        {name: 'icon-link', code: '&#xf0c1;'},
        {name: 'icon-cloud', code: '&#xf0c2;'},
        {name: 'icon-beaker', code: '&#xf0c3;'},
        {name: 'icon-cut', code: '&#xf0c4;'},
        {name: 'icon-copy', code: '&#xf0c5;'},
        {name: 'icon-paper-clip', code: '&#xf0c6;'},
        {name: 'icon-save', code: '&#xf0c7;'},
        {name: 'icon-sign-blank', code: '&#xf0c8;'},
        {name: 'icon-reorder', code: '&#xf0c9;'},
        {name: 'icon-list-ul', code: '&#xf0ca;'},
        {name: 'icon-list-ol', code: '&#xf0cb;'},
        {name: 'icon-strikethrough', code: '&#xf0cc;'},
        {name: 'icon-underline', code: '&#xf0cd;'},
        {name: 'icon-table', code: '&#xf0ce;'},
        {name: 'icon-magic', code: '&#xf0d0;'},
        {name: 'icon-truck', code: '&#xf0d1;'},
        {name: 'icon-pinterest', code: '&#xf0d2;'},
        {name: 'icon-pinterest-sign', code: '&#xf0d3;'},
        {name: 'icon-google-plus-sign', code: '&#xf0d4;'},
        {name: 'icon-google-plus', code: '&#xf0d5;'},
        {name: 'icon-money', code: '&#xf0d6;'},
        {name: 'icon-caret-down', code: '&#xf0d7;'},
        {name: 'icon-caret-up', code: '&#xf0d8;'},
        {name: 'icon-caret-left', code: '&#xf0d9;'},
        {name: 'icon-caret-right', code: '&#xf0da;'},
        {name: 'icon-columns', code: '&#xf0db;'},
        {name: 'icon-sort', code: '&#xf0dc;'},
        {name: 'icon-sort-down', code: '&#xf0dd;'},
        {name: 'icon-sort-up', code: '&#xf0de;'},
        {name: 'icon-envelope-alt', code: '&#xf0e0;'},
        {name: 'icon-linkedin', code: '&#xf0e1;'},
        {name: 'icon-undo', code: '&#xf0e2;'},
        {name: 'icon-legal', code: '&#xf0e3;'},
        {name: 'icon-dashboard', code: '&#xf0e4;'},
        {name: 'icon-comment-alt', code: '&#xf0e5;'},
        {name: 'icon-comments-alt', code: '&#xf0e6;'},
        {name: 'icon-bolt', code: '&#xf0e7;'},
        {name: 'icon-sitemap', code: '&#xf0e8;'},
        {name: 'icon-umbrella', code: '&#xf0e9;'},
        {name: 'icon-paste', code: '&#xf0ea;'},
        {name: 'icon-lightbulb', code: '&#xf0eb;'},
        {name: 'icon-exchange', code: '&#xf0ec;'},
        {name: 'icon-cloud-download', code: '&#xf0ed;'},
        {name: 'icon-cloud-upload', code: '&#xf0ee;'},
        {name: 'icon-user-md', code: '&#xf0f0;'},
        {name: 'icon-stethoscope', code: '&#xf0f1;'},
        {name: 'icon-suitcase', code: '&#xf0f2;'},
        {name: 'icon-bell-alt', code: '&#xf0f3;'},
        {name: 'icon-coffee', code: '&#xf0f4;'},
        {name: 'icon-food', code: '&#xf0f5;'},
        {name: 'icon-file-alt', code: '&#xf0f6;'},
        {name: 'icon-building', code: '&#xf0f7;'},
        {name: 'icon-hospital', code: '&#xf0f8;'},
        {name: 'icon-ambulance', code: '&#xf0f9;'},
        {name: 'icon-medkit', code: '&#xf0fa;'},
        {name: 'icon-fighter-jet', code: '&#xf0fb;'},
        {name: 'icon-beer', code: '&#xf0fc;'},
        {name: 'icon-h-sign', code: '&#xf0fd;'},
        {name: 'icon-plus-sign-alt', code: '&#xf0fe;'},
        {name: 'icon-double-angle-left', code: '&#xf100;'},
        {name: 'icon-double-angle-right', code: '&#xf101;'},
        {name: 'icon-double-angle-up', code: '&#xf102;'},
        {name: 'icon-double-angle-down', code: '&#xf103;'},
        {name: 'icon-angle-left', code: '&#xf104;'},
        {name: 'icon-angle-right', code: '&#xf105;'},
        {name: 'icon-angle-up', code: '&#xf106;'},
        {name: 'icon-angle-down', code: '&#xf107;'},
        {name: 'icon-desktop', code: '&#xf108;'},
        {name: 'icon-laptop', code: '&#xf109;'},
        {name: 'icon-tablet', code: '&#xf10a;'},
        {name: 'icon-mobile-phone', code: '&#xf10b;'},
        {name: 'icon-circle-blank', code: '&#xf10c;'},
        {name: 'icon-quote-left', code: '&#xf10d;'},
        {name: 'icon-quote-right', code: '&#xf10e;'},
        {name: 'icon-spinner', code: '&#xf110;'},
        {name: 'icon-circle', code: '&#xf111;'},
        {name: 'icon-reply', code: '&#xf112;'},
    ]
}