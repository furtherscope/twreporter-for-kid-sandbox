import fs from 'fs'
import path from 'path'
import serialize from 'serialize-javascript'
import data from '../src/test-data/data.json'

/**
 * Data
 * @typedef {Object} Data
 * @typedef {} embeddedItems
 * @typedef {} chapters
 */

/**
 *
 *
 * @export
 * @param {Data} [data={}]
 * @param {string} [baseUrl='']
 * @returns
 */
function createIndexHtml(data = {}) {
  const { embeddedItems, chapters } = data
  const html = `

<!doctype html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover">
<link rel="profile" href="https://gmpg.org/xfn/11">
<title>【新聞遊戲】急診醫師換你當！你能扛住大量湧入的病人嗎？ &#x2d; 少年報導者 The Reporter for Kids</title>

<meta name="robots" content="max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
<meta name="description" content="急診室本就擠得水泄不通，疫情之下，又有大量病患湧入，讓急診室更加壅塞。《報導者》新聞遊戲《急診人生》模擬急診室會發生的各種情況，這次你來當急診醫師，你扛得住大量病患嗎？" />
<meta property="og:image" content="https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-scaled.jpg" />
<meta property="og:image:width" content="2560" />
<meta property="og:image:height" content="1440" />
<meta property="og:image:alt" content="急診醫師換你當！你能扛住大量湧入的病人嗎？＿主圖＿鄭涵文＿吳政達" />
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="article" />
<meta property="og:title" content="【新聞遊戲】急診醫師換你當！你能扛住大量湧入的病人嗎？" />
<meta property="og:description" content="急診室本就擠得水泄不通，疫情之下，又有大量病患湧入，讓急診室更加壅塞。《報導者》新聞遊戲《急診人生》模擬急診室會發生的各種情況，這次你來當急診醫師，你扛得住大量病患嗎？" />
<meta property="og:url" content="https://kids.twreporter.org/emergency-overstrain-2022-game/" />
<meta property="og:site_name" content="少年報導者 The Reporter for Kids" />
<meta property="og:updated_time" content="2022-10-22T08:07+00:00" />
<meta property="article:published_time" content="2022-07-22T05:52+00:00" />
<meta property="article:modified_time" content="2022-10-22T08:07+00:00" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="【新聞遊戲】急診醫師換你當！你能扛住大量湧入的病人嗎？" />
<meta name="twitter:description" content="急診室本就擠得水泄不通，疫情之下，又有大量病患湧入，讓急診室更加壅塞。《報導者》新聞遊戲《急診人生》模擬急診室會發生的各種情況，這次你來當急診醫師，你扛得住大量病患嗎？" />
<meta name="twitter:image" content="https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-scaled.jpg" />
<meta name="twitter:image:width" content="2560" />
<meta name="twitter:image:height" content="1440" />
<meta name="twitter:image:alt" content="急診醫師換你當！你能扛住大量湧入的病人嗎？＿主圖＿鄭涵文＿吳政達" />
<meta name="theme-color" content="#f76977" />
<link rel="canonical" href="https://kids.twreporter.org/emergency-overstrain-2022-game/" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://kids.twreporter.org/","name":"\u5c11\u5e74\u5831\u5c0e\u8005 The Reporter for Kids"}},{"@type":"ListItem","position":2,"item":{"@id":"https://kids.twreporter.org/category/comics/","name":"\u6f2b\u756b"}},{"@type":"ListItem","position":3,"item":{"@id":"https://kids.twreporter.org/category/comics/graphic-news/","name":"\u5716\u89e3\u65b0\u805e"}},{"@type":"ListItem","position":4,"item":{"@id":"https://kids.twreporter.org/category/comics/graphic-news/game/","name":"\u65b0\u805e\u904a\u6232"}},{"@type":"ListItem","position":5,"item":{"@id":"https://kids.twreporter.org/emergency-overstrain-2022-game/","name":"\u3010\u65b0\u805e\u904a\u6232\u3011\u6025\u8a3a\u91ab\u5e2b\u63db\u4f60\u7576\uff01\u4f60\u80fd\u625b\u4f4f\u5927\u91cf\u6e67\u5165\u7684\u75c5\u4eba\u55ce\uff1f"}}]}</script>

<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="訂閱《少年報導者 The Reporter for Kids》&raquo; 資訊提供" href="https://kids.twreporter.org/feed/" />
<link rel="alternate" type="application/rss+xml" title="訂閱《少年報導者 The Reporter for Kids》&raquo; 留言的資訊提供" href="https://kids.twreporter.org/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="訂閱《少年報導者 The Reporter for Kids 》&raquo;〈急診醫師換你當！你能扛住大量湧入的病人嗎？〉留言的資訊提供" href="https://kids.twreporter.org/emergency-overstrain-2022-game/feed/" />
<link rel='stylesheet' id='blocksy-dynamic-global-css' href='https://kids.twreporter.org/wp-content/uploads/blocksy/css/global.css?ver=74160' media='all' />
<link rel='stylesheet' id='glide-core-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/packages/glides/glide.core.min.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='https://kids.twreporter.org/wp-includes/css/dist/block-library/style.min.css?ver=6.0.3' media='all' />
<link rel='stylesheet' id='ugb-style-css-v2-css' href='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/deprecated/frontend_blocks_deprecated_v2.css?ver=3.5.0' media='all' />
<style id='ugb-style-css-v2-inline-css'>
:root {--stk-block-width-default-detected: 1440px;}
:root {
			--content-width: 1440px;
		}
</style>
<link rel='stylesheet' id='ugb-style-css-premium-v2-css' href='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/deprecated/frontend_blocks_deprecated_v2__premium_only.css?ver=3.5.0' media='all' />
<style id='create-block-rpjr-box-style-inline-css'>


</style>
<style id='rpjr-image-comparison-style-inline-css'>


</style>
<style id='rpjr-rpjr-audio-style-inline-css'>
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/style.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/**
 * The following styles get applied both on the front of your site
 * and in the editor.
 *
 * Replace them with your own styles or remove the file completely.
 */

/*# sourceMappingURL=style-index.css.map*/
</style>
<style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--palette-color-1: var(--paletteColor1, #27B5F7);--wp--preset--color--palette-color-2: var(--paletteColor2, #1559ed);--wp--preset--color--palette-color-3: var(--paletteColor3, #3A4F66);--wp--preset--color--palette-color-4: var(--paletteColor4, #232323);--wp--preset--color--palette-color-5: var(--paletteColor5, #F76977);--wp--preset--color--palette-color-6: var(--paletteColor6, #F8C341);--wp--preset--color--palette-color-7: var(--paletteColor7, #EAEAEA);--wp--preset--color--palette-color-8: var(--paletteColor8, #ffffff);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--gradient--juicy-peach: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);--wp--preset--gradient--young-passion: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);--wp--preset--gradient--true-sunset: linear-gradient(to right, #fa709a 0%, #fee140 100%);--wp--preset--gradient--morpheus-den: linear-gradient(to top, #30cfd0 0%, #330867 100%);--wp--preset--gradient--plum-plate: linear-gradient(135deg, #667eea 0%, #764ba2 100%);--wp--preset--gradient--aqua-splash: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);--wp--preset--gradient--love-kiss: linear-gradient(to top, #ff0844 0%, #ffb199 100%);--wp--preset--gradient--new-retrowave: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);--wp--preset--gradient--plum-bath: linear-gradient(to top, #cc208e 0%, #6713d2 100%);--wp--preset--gradient--high-flight: linear-gradient(to right, #0acffe 0%, #495aff 100%);--wp--preset--gradient--teen-party: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);--wp--preset--gradient--fabled-sunset: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);--wp--preset--gradient--arielle-smile: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);--wp--preset--gradient--itmeo-branding: linear-gradient(180deg, #2af598 0%, #009efd 100%);--wp--preset--gradient--deep-blue: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);--wp--preset--gradient--strong-bliss: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);--wp--preset--gradient--sweet-period: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);--wp--preset--gradient--purple-division: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);--wp--preset--gradient--cold-evening: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);--wp--preset--gradient--mountain-rock: linear-gradient(to right, #868f96 0%, #596164 100%);--wp--preset--gradient--desert-hump: linear-gradient(to top, #c79081 0%, #dfa579 100%);--wp--preset--gradient--ethernal-constance: linear-gradient(to top, #09203f 0%, #537895 100%);--wp--preset--gradient--happy-memories: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);--wp--preset--gradient--grown-early: linear-gradient(to top, #0ba360 0%, #3cba92 100%);--wp--preset--gradient--morning-salad: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);--wp--preset--gradient--night-call: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);--wp--preset--gradient--mind-crawl: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);--wp--preset--gradient--angel-care: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);--wp--preset--gradient--juicy-cake: linear-gradient(to top, #e14fad 0%, #f9d423 100%);--wp--preset--gradient--rich-metal: linear-gradient(to right, #d7d2cc 0%, #304352 100%);--wp--preset--gradient--mole-hall: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);--wp--preset--gradient--cloudy-knoxville: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);--wp--preset--gradient--soft-grass: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);--wp--preset--gradient--saint-petersburg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);--wp--preset--gradient--everlasting-sky: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);--wp--preset--gradient--kind-steel: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);--wp--preset--gradient--over-sun: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);--wp--preset--gradient--premium-white: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);--wp--preset--gradient--clean-mirror: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);--wp--preset--gradient--wild-apple: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);--wp--preset--gradient--snow-again: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);--wp--preset--gradient--confident-cloud: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);--wp--preset--gradient--glass-water: linear-gradient(to top, #dfe9f3 0%, white 100%);--wp--preset--gradient--perfect-white: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<link rel='stylesheet' id='parent-style-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/style.css?ver=6.0.3' media='all' />
<link rel='stylesheet' id='layout-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/layout.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='rpjr-atom-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/atom.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='rpjr-dot-hr-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/dot-hr.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='rpjr-button-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/button.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='rpjr-post-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/post.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='rpjr-icomoon-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/icomoon/style.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='topic-post-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/pages/topic.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='category-post-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/pages/archive.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='footer-css-css' href='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/css/pages/footer.css?ver=0.9.6' media='all' />
<link rel='stylesheet' id='ct-main-styles-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/main.min.css?ver=1.8.44' media='all' />
<link rel='stylesheet' id='blocksy-ext-post-types-extra-styles-css' href='https://kids.twreporter.org/wp-content/plugins/blocksy-companion-pro/framework/premium/extensions/post-types-extra/static/bundle/main.min.css?ver=1.8.52' media='all' />
<link rel='stylesheet' id='blocksy-ext-widgets-styles-css' href='https://kids.twreporter.org/wp-content/plugins/blocksy-companion-pro/framework/extensions/widgets/static/bundle/main.min.css?ver=1.8.52' media='all' />
<link rel='stylesheet' id='ct-page-title-styles-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/page-title.min.css?ver=1.8.44' media='all' />
<link rel='stylesheet' id='ct-comments-styles-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/comments.min.css?ver=1.8.44' media='all' />
<link rel='stylesheet' id='ct-stackable-styles-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/stackable.min.css?ver=1.8.44' media='all' />
<link rel='stylesheet' id='ct-wpforms-styles-css' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/wpforms.min.css?ver=1.8.44' media='all' />

<script async src="https://www.googletagmanager.com/gtag/js?id=G-MKSSZ72N0E"></script>
<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-MKSSZ72N0E');
			</script>

<script src='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/js/utilities/eq-height.js?ver=0.9.6' id='same-height-js'></script>
<script src='https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/js/packages/glide.min.js?ver=0.9.6' id='glide-js'></script>
<script id='ugb-block-frontend-js-v2-js-extra'>
var stackable = {"restUrl":"https:\/\/kids.twreporter.org\/wp-json\/"};
</script>
<script src='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/deprecated/frontend_blocks_deprecated_v2.js?ver=3.5.0' id='ugb-block-frontend-js-v2-js'></script>
<script src='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/deprecated/frontend_blocks_deprecated_v2__premium_only.js?ver=3.5.0' id='ugb-block-frontend-js-premium-v2-js'></script>
<link rel="https://api.w.org/" href="https://kids.twreporter.org/wp-json/" /><link rel="alternate" type="application/json" href="https://kids.twreporter.org/wp-json/wp/v2/posts/3533" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://kids.twreporter.org/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://kids.twreporter.org/wp-includes/wlwmanifest.xml" />
<link rel="alternate" type="application/json+oembed" href="https://kids.twreporter.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fkids.twreporter.org%2Femergency-overstrain-2022-game%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://kids.twreporter.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fkids.twreporter.org%2Femergency-overstrain-2022-game%2F&#038;format=xml" />
<script type='text/javascript'>
/* <![CDATA[ */
var VPData = {"__":{"couldnt_retrieve_vp":"Couldn't retrieve Visual Portfolio ID.","pswp_close":"Close (Esc)","pswp_share":"Share","pswp_fs":"Toggle fullscreen","pswp_zoom":"Zoom in\/out","pswp_prev":"Previous (arrow left)","pswp_next":"Next (arrow right)","pswp_share_fb":"Share on Facebook","pswp_share_tw":"Tweet","pswp_share_pin":"Pin it","fancybox_close":"Close","fancybox_next":"Next","fancybox_prev":"Previous","fancybox_error":"The requested content cannot be loaded. <br \/> Please try again later.","fancybox_play_start":"Start slideshow","fancybox_play_stop":"Pause slideshow","fancybox_full_screen":"Full screen","fancybox_thumbs":"Thumbnails","fancybox_download":"Download","fancybox_share":"Share","fancybox_zoom":"Zoom"},"settingsPopupGallery":{"enable_on_wordpress_images":false,"vendor":"fancybox","deep_linking":false,"deep_linking_url_to_share_images":false,"show_arrows":true,"show_counter":true,"show_zoom_button":true,"show_fullscreen_button":true,"show_share_button":true,"show_close_button":true,"show_thumbs":true,"show_download_button":false,"show_slideshow":false,"click_to_zoom":true},"screenSizes":[320,576,768,992,1200]};
/* ]]> */
</script>
<noscript>
            <style type="text/css">
                .vp-portfolio__preloader-wrap{display:none}.vp-portfolio__items-wrap,.vp-portfolio__filter-wrap,.vp-portfolio__sort-wrap,.vp-portfolio__pagination-wrap{visibility:visible;opacity:1}.vp-portfolio__item .vp-portfolio__item-img noscript+img{display:none}.vp-portfolio__thumbnails-wrap{display:none}            </style>
        </noscript>
<meta name="format-detection" content="telephone=no" /><noscript><link rel='stylesheet' href='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/no-scripts.min.css' type='text/css' /></noscript>
<style id="ct-main-styles-inline-css">[data-block*="3783"] > [class*="ct-container"] > article[class*="post"] {--has-boxed:var(--false);--has-wide:var(--true);}</style>
<style type="text/css">
            /* If html does not have either class, do not show lazy loaded images. */
            html:not(.vp-lazyload-enabled):not(.js) .vp-lazyload {
                display: none;
            }
        </style>
<script>
            document.documentElement.classList.add(
                'vp-lazyload-enabled'
            );
        </script>
<link rel="icon" href="https://kids.twreporter.org/wp-content/uploads/2022/10/cropped-少年報導者favicon-1-32x32.png" sizes="32x32" />
<link rel="icon" href="https://kids.twreporter.org/wp-content/uploads/2022/10/cropped-少年報導者favicon-1-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://kids.twreporter.org/wp-content/uploads/2022/10/cropped-少年報導者favicon-1-180x180.png" />
<meta name="msapplication-TileImage" content="https://kids.twreporter.org/wp-content/uploads/2022/10/cropped-少年報導者favicon-1-270x270.png" />
<style id="wp-custom-css">
			/** about us page **/
.ct-custom.elementor-widget-image-box,
.ct-custom .elementor-widget-container {
	height: 100%;
}

.ct-custom .elementor-widget-container {
	overflow: hidden;
}

.ct-custom .elementor-image-box-content {
	padding: 0 30px;
}

.ct-header-trigger .ct-icon rect:nth-child(1) {
	fill: #27B5F7;
}

.ct-header-trigger .ct-icon rect:nth-child(2) {
	fill: #F76977;
}

.ct-header-trigger .ct-icon rect:nth-child(3) {
	fill: #F8C341;
}

.mobile-menu > ul {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 138px;
	margin: 50px auto 0;
}
.mobile-menu > ul > li {
	flex-basis: 50%;
}

.footer-link {
	margin-left: 40px;
	margin-right: -20px;
	color: #232323;
	font-weight: 500 !important;
	font-size: 16px;
}
.footer-link:hover {
	color: #232323;
}
body.error404 .entry-content {
	padding-bottom: 60px;
}
body.post-type-archive-topic .page-title {
	display: none;
}

@media screen and (min-width: 768px) {
body.archive.tag .hero-section, .page-title,
body.search-results .hero-section .page-title
{
	margin-top: 40px;
}
}

@media screen and (min-width: 992px) {
	body.archive.tag .hero-section, .page-title,
body.search-results .hero-section .page-title
{
	margin-top: 80px;
}
}

@media screen and (min-width: 768px) {
	#offcanvas .ct-panel-content[data-device="mobile"] {
			background-image: url(/wp-content/uploads/2022/10/navbar_pic.svg);
			background-repeat: no-repeat;
			background-position: bottom left 20%;
			background-size: 317px;
	}
	#offcanvas .mobile-menu > ul {
		margin-top: 5px;
	}
}

@media screen and (max-width: 767px) {
	#offcanvas .mobile-menu>ul {
		margin-top: 0;
	}
	#offcanvas .site-logo-container {
		display: inline;
		min-height: 0;
		height: auto;
		margin-bottom: -10px;
	}
	[data-header*="type-1"] .ct-header [data-id="search-input"] {
		--max-width: 75%;
	}
	#offcanvas .site-logo-container img {
		display: none;
	}
	#offcanvas .site-logo-container::after {
		content: '理解世界  參與未來';
		font-family: 'Noto Sans TC';
		font-weight: 400;
		font-size: 14px;
		line-height: 160%;
		letter-spacing: 0.28em;
		color: #232323;
	}
		#offcanvas .ct-panel-content[data-device="mobile"] {
			margin-top: -80px;
			background-image: url(/wp-content/uploads/2022/10/navbar_pic.svg);
			background-repeat: no-repeat;
			background-position: bottom left 20%;
			background-size: 221px;
	}
	#offcanvas .mobile-menu {
		margin-top: 0;
	}
	#offcanvas .mobile-menu > ul {
		margin-top: 5px;
	}
	#offcanvas .ct-header-account {
		margin: 10px 0;
	}
}
.ct-footer a[href*="tel"] {
	color: #232323;
	text-decoration: none;
	pointer-events: none;
}
body.archive .ct-container {
	padding-bottom: 120px;
}		</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style id="" media="all">/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
#main-container {
  min-height: 0 !important;
  overflow-x: visible;
}
</style></head>
<body class="post-template-default single single-post postid-3533 single-format-standard wp-custom-logo wp-embed-responsive stk--is-blocksy-theme 漫畫 theme-yellow ct-loading" data-link="type-2" data-prefix="single_blog_post" data-header="type-1:sticky" data-footer="type-1" itemscope="itemscope" itemtype="https://schema.org/Blog">
<a class="skip-link show-on-focus" href="#main">
跳至主要內容</a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><div class="ct-drawer-canvas">
<div id="search-modal" class="ct-panel" data-behaviour="modal">
<div class="ct-panel-actions">
<button class="ct-toggle-close" data-type="type-1" aria-label="Close search modal">
<svg class="ct-icon" width="12" height="12" viewBox="0 0 15 15">
<path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z" />
</svg>
</button>
</div>
<div class="ct-panel-content">
<form role="search" method="get" class="search-form" action="https://kids.twreporter.org" aria-haspopup="listbox" data-live-results="">
<input type="search" class="modal-field" placeholder="搜尋" value="" name="s" autocomplete="off" title="搜尋輸入" />
<button type="submit" class="search-submit" aria-label="搜尋按鈕">
<svg class="ct-icon" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M14.8,13.7L12,11c0.9-1.2,1.5-2.6,1.5-4.2c0-3.7-3-6.8-6.8-6.8S0,3,0,6.8s3,6.8,6.8,6.8c1.6,0,3.1-0.6,4.2-1.5l2.8,2.8c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15.1,14.5,15.1,14,14.8,13.7z M1.5,6.8c0-2.9,2.4-5.2,5.2-5.2S12,3.9,12,6.8S9.6,12,6.8,12S1.5,9.6,1.5,6.8z" /></svg>
<span data-loader="circles"><span></span><span></span><span></span></span>
</button>
<input type="hidden" name="post_type" value="post">
<div class="screen-reader-text" aria-live="polite" role="status">
找不到符合的 </div>
</form>
</div>
</div>
<div id="offcanvas" class="ct-panel ct-header" data-behaviour="modal">
<div class="ct-panel-actions">
<button class="ct-toggle-close" data-type="type-1" aria-label="關閉側選單">
<svg class="ct-icon" width="12" height="12" viewBox="0 0 15 15">
<path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z" />
</svg>
</button>
</div>
<div class="ct-panel-content" data-device="desktop"></div><div class="ct-panel-content" data-device="mobile">
<a href="https://kids.twreporter.org/" class="site-logo-container" data-id="offcanvas-logo" rel="home" itemprop="url">
<img width="592" height="203" src="https://kids.twreporter.org/wp-content/uploads/2022/10/logo-full.svg" class="attachment-full size-full" alt="少年報導者 The Reporter for Kids" /> </a>
<div class="ct-header-text " data-id="text" data-width="stretch">
<div class="entry-content">
<p><div class="mobile-header">
<a href="/about#post" class="header-left__btn-1 rpjr-btn">投稿</a>
<a href="https://forms.gle/bTNgZDAD5VtHKCuT9" target="_blank" class="header-left__btn-1 rpjr-btn rpjr-btn-orange" style="margin-left:16px">訂閱</a>
<a href="/about" class="header-left__btn-1 rpjr-btn rpjr-btn-red" style="margin-left:16px">我們是誰</a>
</div></p> </div>
</div>
<div class="ct-search-box " data-id="search-input">
<form role="search" method="get" class="search-form" action="https://kids.twreporter.org" aria-haspopup="listbox">
<input type="search" placeholder="搜尋更多新聞、議題" value="" name="s" autocomplete="off" title="搜尋輸入" />
<button type="submit" class="search-submit" aria-label="搜尋按鈕">
<svg class="ct-icon" width='15' height='15' viewBox='0 0 15 15'><path d='M14.8,13.7L12,11c0.9-1.2,1.5-2.6,1.5-4.2c0-3.7-3-6.8-6.8-6.8S0,3,0,6.8s3,6.8,6.8,6.8c1.6,0,3.1-0.6,4.2-1.5l2.8,2.8c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15.1,14.5,15.1,14,14.8,13.7zM1.5,6.8c0-2.9,2.4-5.2,5.2-5.2S12,3.9,12,6.8S9.6,12,6.8,12S1.5,9.6,1.5,6.8z' /></svg>
<span data-loader="circles"><span></span><span></span><span></span></span>
</button>
<input type="hidden" name="post_type" value="post">
</form>
</div>
<a data-id="account" class="ct-header-account" data-state="out" data-label="left" href="#account-modal" aria-label="登入"><span class="ct-label ct-hidden-sm ct-hidden-md ct-hidden-lg">登入</span><svg class="ct-icon" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M7.5 0C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15 15 11.6 15 7.5 11.6 0 7.5 0zm0 2.1c1.4 0 2.5 1.1 2.5 2.4S8.9 7 7.5 7 5 5.9 5 4.5s1.1-2.4 2.5-2.4zm0 11.4c-2.1 0-3.9-1-5-2.6C3.4 9.6 6 9 7.5 9s4.1.6 5 1.9c-1.1 1.6-2.9 2.6-5 2.6z" /></svg></a>
<nav class="mobile-menu" data-id="mobile-menu" data-interaction="click" data-toggle-type="type-1" aria-label="滑出選單">
<ul id="menu-header-%e4%b8%bb%e9%81%b8%e5%96%ae-1" class=""><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3776"><a href="/topic/" class="ct-menu-link">專題</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3773"><a href="https://kids.twreporter.org/category/news/" class="ct-menu-link">新聞</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3772"><a href="https://kids.twreporter.org/category/culture/" class="ct-menu-link">文化</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-3775"><a href="https://kids.twreporter.org/category/comics/" class="ct-menu-link">漫畫</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3774"><a href="https://kids.twreporter.org/category/campus/" class="ct-menu-link">校園</a></li>
</ul></nav>
</div></div>
<div id="account-modal" class="ct-panel" data-behaviour="modal">
<div class="ct-panel-actions">
<button class="ct-toggle-close" data-type="type-1" aria-label="關閉帳號彈窗">
<svg class="ct-icon" width="12" height="12" viewBox="0 0 15 15">
<path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z" />
</svg>
</button>
</div>
<div class="ct-panel-content">
<div class="ct-account-form">
<ul>
<li class="active ct-login" tabindex="0">
登入 </li>
<li class="ct-register" tabindex="0">
註冊 </li>
</ul>
<div class="ct-account-panel ct-login-form active">
<form name="loginform" id="loginform" action="#" method="post">
</form>
<div class="rpjr-login-form">
<h2>無密碼登入</h2>
<div>
<p class="rpjr-login-form__message">
輸入電子信箱，我們會將登入連結寄送給你
</p>
</div>
<form name="wpaloginform" id="wpaloginform" action="" method="post">
<p>
<label for="user_email_username">Login with email or username</label>
<input type="text" name="user_email_username" id="user_email_username" class="input" value="" size="25" />
<input type="submit" name="wpa-submit" id="wpa-submit" class="button-primary" value="登入" />
</p>
<input type="hidden" id="nonce" name="nonce" value="b96bfcb352" />
</form>
</div>
<div style="display:none;">
<p class="login-username">
<label for="user_login">使用者帳號或電子郵件地址</label>
<input type="text" name="log" id="user_login" class="input" value="" size="20">
</p>
<p class="login-password-input">
<label for="user_pass">密碼</label>
<input type="password" name="pwd" id="user_pass" class="input" value="" size="20">
<span class="show-password-input"></span>
</p>
<p class="login-remember col-2">
<span>
<input name="rememberme" type="checkbox" id="rememberme" class="ct-checkbox" value="forever">
<label for="rememberme">保持登入</label>
</span>
<a href="https://kids.twreporter.org/wp-login.php?action=lostpassword" class="ct-forgot-password">
忘記密碼？ </a>
</p>
<p class="login-submit">
<button name="wp-submit" class="ct-button">
登入
<svg width="23" height="23" viewBox="0 0 40 40">
<path opacity=".2" fill="currentColor" d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z" />
<path fill="currentColor" d="m26.013 10.047 1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z">
<animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" />
</path>
</svg>
</button>
<input type="hidden" name="redirect_to" value="https://kids.twreporter.org/emergency-overstrain-2022-game/">
</p>
</form>
</div>
<div class="ct-account-panel ct-register-form">
<form name="registerform" id="registerform" action="#" method="post" novalidate="novalidate">
<p>
<label for="user_login_register">使用者名稱</label>
<input type="text" name="user_login" id="user_login_register" class="input" value="" size="20" autocapitalize="off">
</p>
<p>
<label for="user_email">電子郵件</label>
<input type="email" name="user_email" id="user_email" class="input" value="" size="25">
</p>
<p id="reg_passmail">
註冊確認將透過電子郵件寄送給你	</p>
<p>
<button name="wp-submit" class="ct-button">
註冊
<svg width="23" height="23" viewBox="0 0 40 40">
<path opacity=".2" fill="currentColor" d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z" />
<path fill="currentColor" d="m26.013 10.047 1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z">
<animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" />
</path>
</svg>
</button>

</p>
<input type="hidden" id="blocksy-register-nonce" name="blocksy-register-nonce" value="997e102861" /><input type="hidden" name="_wp_http_referer" value="/emergency-overstrain-2022-game/" /></form>
</div>
<div class="ct-account-panel ct-forgot-password-form">
<form name="lostpasswordform" id="lostpasswordform" action="#" method="post">
<p>
<label for="user_login_forgot">使用者帳號或電子郵件地址</label>
<input type="text" name="user_login" id="user_login_forgot" class="input" value="" size="20" autocapitalize="off" required>
</p>
<p>
<button name="wp-submit" class="ct-button">
取得新密碼
<svg width="23" height="23" viewBox="0 0 40 40">
<path opacity=".2" fill="currentColor" d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z" />
<path fill="currentColor" d="m26.013 10.047 1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z">
<animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" />
</path>
</svg>
</button>

</p>
<input type="hidden" id="blocksy-lostpassword-nonce" name="blocksy-lostpassword-nonce" value="682886fa15" /><input type="hidden" name="_wp_http_referer" value="/emergency-overstrain-2022-game/" /></form>
<a href="https://kids.twreporter.org/wp-login.php" class="ct-back-to-login ct-login">
← 回到登入頁面 </a>
</div>
</div>
</div>
</div>
</div>
<div id="main-container">
<header id="header" class="ct-header" data-id="type-1" itemscope="" itemtype="https://schema.org/WPHeader"><div data-device="desktop"><div class="ct-sticky-container"><div data-sticky="slide"><div data-row="middle" data-column-set="2"><div class="ct-container"><div data-column="start" data-placements="1"><div data-items="primary">
<div class="site-branding" data-id="logo" itemscope="itemscope" itemtype="https://schema.org/Organization">
<a href="https://kids.twreporter.org/" class="site-logo-container" rel="home"><img width="592" height="120" src="https://kids.twreporter.org/wp-content/uploads/2022/10/LOGO.svg" class="default-logo" alt="少年報導者 The Reporter for Kids" /></a>
</div>
<div class="ct-header-text " data-id="p89zlD" data-width="stretch">
<div class="entry-content">
<div class="header-left">
<a href="/about#post" class="header-left__btn-1 rpjr-btn" style="margin-right:14px">投稿</a>
<a href="https://forms.gle/bTNgZDAD5VtHKCuT9" target="_blank" class="header-left__btn-1 rpjr-btn rpjr-btn-orange" style="margin-right:15px">訂閱</a>
<img src="/wp-content/uploads/2022/10/header-left-slogan.svg" class="header-left__slogan" />
</div> </div>
</div>
</div></div><div data-column="end" data-placements="1"><div data-items="primary">
<nav id="header-menu-1" class="header-menu-1" data-id="menu" data-interaction="hover" data-menu="type-1" data-dropdown="type-1:simple" itemscope="" itemtype="https://schema.org/SiteNavigationElement" aria-label="頁首選單">
<ul id="menu-header-%e4%b8%bb%e9%81%b8%e5%96%ae" class="menu"><li id="menu-item-3776" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3776"><a href="/topic/" class="ct-menu-link">專題</a></li>
<li id="menu-item-3773" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3773"><a href="https://kids.twreporter.org/category/news/" class="ct-menu-link">新聞</a></li>
<li id="menu-item-3772" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3772"><a href="https://kids.twreporter.org/category/culture/" class="ct-menu-link">文化</a></li>
<li id="menu-item-3775" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-3775"><a href="https://kids.twreporter.org/category/comics/" class="ct-menu-link">漫畫</a></li>
<li id="menu-item-3774" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3774"><a href="https://kids.twreporter.org/category/campus/" class="ct-menu-link">校園</a></li>
</ul></nav>
<button data-toggle-panel="#search-modal" class="ct-header-search ct-toggle " aria-label="開啟搜尋表單" data-label="right" data-id="search">
<span class="ct-label ct-hidden-sm ct-hidden-md ct-hidden-lg">搜尋</span>
<svg class="ct-icon" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M14.8,13.7L12,11c0.9-1.2,1.5-2.6,1.5-4.2c0-3.7-3-6.8-6.8-6.8S0,3,0,6.8s3,6.8,6.8,6.8c1.6,0,3.1-0.6,4.2-1.5l2.8,2.8c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15.1,14.5,15.1,14,14.8,13.7z M1.5,6.8c0-2.9,2.4-5.2,5.2-5.2S12,3.9,12,6.8S9.6,12,6.8,12S1.5,9.6,1.5,6.8z" /></svg></button>
<a data-id="account" class="ct-header-account" data-state="out" data-label="left" href="#account-modal" aria-label="登入"><span class="ct-label ct-hidden-sm ct-hidden-md ct-hidden-lg">登入</span><svg class="ct-icon" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M7.5 0C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15 15 11.6 15 7.5 11.6 0 7.5 0zm0 2.1c1.4 0 2.5 1.1 2.5 2.4S8.9 7 7.5 7 5 5.9 5 4.5s1.1-2.4 2.5-2.4zm0 11.4c-2.1 0-3.9-1-5-2.6C3.4 9.6 6 9 7.5 9s4.1.6 5 1.9c-1.1 1.6-2.9 2.6-5 2.6z" /></svg></a>
<div class="ct-header-cta" data-id="button">
<a href="/about" class="ct-button" data-size="small" target="_blank" rel="noopener noreferrer">
我們是誰	</a>
</div>
</div></div></div></div></div></div></div><div data-device="mobile"><div class="ct-sticky-container"><div data-sticky="slide"><div data-row="middle" data-column-set="2"><div class="ct-container-fluid"><div data-column="start" data-placements="1"><div data-items="primary">
<div class="site-branding" data-id="logo" itemscope="itemscope" itemtype="https://schema.org/Organization">
<a href="https://kids.twreporter.org/" class="site-logo-container" rel="home"><img width="592" height="120" src="https://kids.twreporter.org/wp-content/uploads/2022/10/LOGO.svg" class="default-logo" alt="少年報導者 The Reporter for Kids" /></a>
</div>
</div></div><div data-column="end" data-placements="1"><div data-items="primary">
<button data-toggle-panel="#offcanvas" class="ct-header-trigger ct-toggle " data-design="simple" data-label="right" aria-label="開啟滑出式" data-id="trigger">
<span class="ct-label ct-hidden-sm ct-hidden-md ct-hidden-lg">選單</span>
<svg class="ct-icon" width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" data-type="type-1">
<rect y="0.00" width="18" height="1.7" rx="1" />
<rect y="6.15" width="18" height="1.7" rx="1" />
<rect y="12.3" width="18" height="1.7" rx="1" />
</svg>
</button>
</div></div></div></div></div></div></div></header>
<main id="main" class="site-main hfeed" itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="ct-container-full" data-content="normal" data-vertical-spacing="bottom">
<article id="post-3533" class="post-3533 post type-post status-publish format-standard has-post-thumbnail hentry category-game tag-44 tag-256 tag-104 tag-40">
<topic-breadcrumb img-type="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/footer-speaker-blue.png" img-name="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/topic-breadcrumb-list.svg" link="https://kids.twreporter.org/topic/emergency-overstrain-2022/" class="block mb-7">
<span slot="topic-type">國內專題</span>
<span slot="divider"><i class="icon-rpjr-icon-arrow-right"></i></span>
<span slot="topic-name">急診室裡的「炸彈」</span>
</topic-breadcrumb><div class="social-sidebar-container">
<social-sidebar img-fb="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-fb.svg" img-twitter="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-twitter.svg" img-line="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-line.svg" img-link="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-link.svg" img-text="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-text.svg" img-print="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-print.svg" img-social="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/icon/rpjr-icon-color-social.svg" topic-url="https://kids.twreporter.org/topic/emergency-overstrain-2022/"></social-sidebar>
</div><figure class="ct-featured-image "><div class="ct-image-container"><img width="1024" height="576" src="https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-1024x576.jpg" class="attachment-large size-large wp-post-image" alt="急診醫師換你當！你能扛住大量湧入的病人嗎？＿主圖＿鄭涵文＿吳政達" loading="lazy" srcset="https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-1024x576.jpg 1024w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-300x169.jpg 300w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-768x432.jpg 768w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-1536x864.jpg 1536w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-2048x1152.jpg 2048w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-500x281.jpg 500w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-800x450.jpg 800w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-1280x720.jpg 1280w, https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220721_主圖04：遊戲篇＿特寫版-1920x1080.jpg 1920w" sizes="(max-width: 1024px) 100vw, 1024px" itemprop="image" style="aspect-ratio: 16/9;" /></div><figcaption>（插畫／鄭涵文、吳政達）</figcaption></figure>
<div class="hero-section" data-type="type-1">
<header class="entry-header">
<h1 class="page-title" title="急診醫師換你當！你能扛住大量湧入的病人嗎？" itemprop="headline">急診醫師換你當！你能扛住大量湧入的病人嗎？</h1><div class="post_date_category">
<div class="post_date">刊出日期 2022.07.22</div>
<div class="post_primary_category"><a href="/category/game" class="rpjr-btn rpjr-btn-theme">新聞遊戲</a></div>
</div> </header>
</div>
<div class="post-intro">
<p>今年（2022）4月，台灣新冠疫情因Omicron侵襲，進入巔峰，短短幾週內，每日確診人數就快速破萬，更達到8萬、9萬人之多，導致全台醫院的急診室被塞爆，急診醫療人員得一次處理所有撲面而來的多重難題：大量來做篩檢的民眾、一波又一波確診的患者們，以及原本就會來急診就醫的其他病患。</p>
<p>如果讓你上急診室第一戰線，面對這波疫情的考驗，你扛得住嗎？《報導者》設計新聞遊戲〈急診人生〉，要讓你體驗一下急診醫師的日常，挑戰親上急診實戰的狀況。</p>
</div>
<hr class="dot-hr mt-18 mb-18" />
<div class="entry-content">
<p>新聞遊戲<a target="_blank" href="https://www.twreporter.org/a/newsgame-emergency" rel="noreferrer noopener">〈急診人生〉</a>模擬急診室可能會發生的各種情況，你必須要用急診醫護人員的高效率辦事風格，來處理所有突發事件。血條終止時，你就會知道自己的等級，是「住院醫師」、「主治醫師」呢？還是最厲害的「醫龍」！</p>
<p>透過遊戲，讀者可以更了解急診醫護的難為之處。那麼，究竟該如何珍惜急診醫療資源呢？我們採訪多名專家，幫大家整理出<strong>急診就醫5步驟「撥、觀、報、帶、送」</strong>，只要牢記口訣，如果遇到身邊親友必須送急診的狀況，就能更精確也有效率地就醫。</p>
<h4>遊戲大挑戰：現在，上急診戰線吧！</h4>
<div class="wp-block-stackable-columns stk-block-columns stk-block stk-37e91b4" data-block-id="37e91b4"><style>.stk-37e91b4{margin-bottom:0px !important}</style><div class="stk-row stk-inner-blocks stk-block-content stk-content-align stk-37e91b4-column">
<div class="wp-block-stackable-column stk-block-column stk-block-column--v2 stk-column stk-block stk-88aeeb2" data-block-id="88aeeb2"><style>.stk-88aeeb2{margin-bottom:27px !important}</style><div class="stk-column-wrapper stk-block-column__content stk-container stk-88aeeb2-container stk--no-background stk--no-padding"><div class="stk-block-content stk-inner-blocks stk-88aeeb2-inner-blocks">
<a class="no-hover" href="http://0media.tw/p/ergame/">
<img src="https://storage.googleapis.com/twreporter-multimedia/images/20160814180124-415b2bb7a5222450276cff2ebe4e6bfe-mobile.png" alt="急診人生遊戲" width="100%" ,="" height="250%" border="0">
</a>
<div class="wp-block-stackable-text stk-block-text stk-block stk-c317458" data-block-id="c317458"><style>.stk-c317458 .stk-block-text__text{font-size:14px !important}@media screen and (max-width:1023px){.stk-c317458 .stk-block-text__text{font-size:14px !important}}</style><p class="stk-block-text__text has-text-align-center">〈急診人生〉遊戲製作：吳泰輝、吳政達、陳貞樺、蔣宜婷；工程／吳泰輝、方泰鈞；設計／吳政達。音效授權（CC BY 3.0）： blop.mp3 &#8211; Blop.wav by cusconauta；bk.mp3 &#8211; Hall of the Mountain King by Kevin MacLeod；sel.mp3 &#8211; Game Sound Selection.wav by Bertrof。</p></div>
</div></div></div>
</div></div>
<h4>玩家心聲</h4>
<p>你的實戰經驗如何呢？2015年《報導者》就推出〈急診人生〉這個遊戲，也曾有國中小的同學挑戰過，極少人可以破關到醫龍等級。時隔7年，我們採訪到一尾稀有的醫龍和一位主治醫師，一起來看看他們遊戲過關的訣竅，以及從遊戲中對急診醫療有什麼體會。</p>
<script>
        (function() {
          window.__embeddedItems=${serialize(embeddedItems)};
          window.__chapters=${serialize(chapters)};
        })()
      </script>
      <div id="root"></div>
<h4>病人該怎麼做？</h4>
<p>7年前《報導者》推出這款遊戲的時候，我們也同步梳理了急診室壅塞的<a target="_blank" href="https://www.twreporter.org/topics/emergency-overstrain" rel="noreferrer noopener">原因和難題</a>。7年後的今天，急診醫師說，遊戲裡描繪的問題，都依然存在。</p>
<p>雖然作為一般民眾，大家不一定幫得上醫療改革的忙，但可以學會如何正確就醫，且精準、不浪費地使用醫療資源。這樣可以確保周遭的人若出現緊急狀況或意外事故，自己就能更快速掌握他們的狀況，也讓119救護人員儘速做出正確急診醫療判斷。大家一起善用醫療資源，保障自己和親人的生命安全。</p>
<div class="infogram-embed" data-id="_/mLLQ15CxWmDq5hr3z7YA" data-type="interactive" data-title="急診就醫5步驟／少年報導者"></div><script>!function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");</script>
</div>
<div class="rpjr-post-tags">
<h3 class="rpjr-post-tags__heading">
<i class="icon-rpjr-icon-tag"><i class="path1 text-color-theme"></i><i class="path2"></i></i>
&nbsp;&nbsp;常用關鍵字
</h3>
<div class="rpjr-post-tags__box">
<a href="https://kids.twreporter.org/tag/%e5%85%ac%e8%a1%9b/" class="rpjr-post_tags__tag-item rpjr-btn rpjr-btn-tag">#&nbsp;公衛</a><a href="https://kids.twreporter.org/tag/%e6%80%a5%e8%a8%ba/" class="rpjr-post_tags__tag-item rpjr-btn rpjr-btn-tag">#&nbsp;急診</a><a href="https://kids.twreporter.org/tag/%e6%96%b0%e8%81%9e%e9%81%8a%e6%88%b2/" class="rpjr-post_tags__tag-item rpjr-btn rpjr-btn-tag">#&nbsp;新聞遊戲</a><a href="https://kids.twreporter.org/tag/%e9%86%ab%e5%ad%b8/" class="rpjr-post_tags__tag-item rpjr-btn rpjr-btn-tag">#&nbsp;醫學</a>
</div>
</div>
</div>
</article>
</div>
<div data-block="hook:3789"><article id="post-3789" class="post-3789"><div class="entry-content">
<div class="wp-block-stackable-columns stk-block-columns stk-block stk-401bcf8 stk-block-background" data-block-id="401bcf8"><style>.stk-401bcf8{background-color:#fff9ec !important}.stk-401bcf8:before{background-color:#fff9ec !important}@media screen and (max-width:1023px){.stk-401bcf8{background-size:177px !important}}.stk-401bcf8{border-radius:30px !important;overflow:hidden !important}.stk-401bcf8{max-width:1100px !important;min-width:auto !important;padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important}@media screen and (max-width:1023px){.stk-401bcf8{margin-right:auto !important;margin-left:auto !important}}</style><style class="stk-custom-css">@media screen and (max-width:991px){.stk-401bcf8.stk-block-columns{--container-width:calc(100% - 40px) !important;width:var(--container-width) !important;max-width:var(--narrow-container-max-width) !important}}</style><div class="stk-row stk-inner-blocks stk-block-content stk-content-align stk-401bcf8-column">
<div class="wp-block-stackable-column stk-block-column stk-block-column--v2 stk-column stk-block stk-c1bc3aa stk-block-background stk--has-background-overlay" data-block-id="c1bc3aa"><style>.stk-c1bc3aa{background-color:transparent !important;background-image:url(https://kids.twreporter.org/wp-content/uploads/2022/10/G文章頁_CTA.png) !important;background-position:bottom right !important;background-repeat:no-repeat !important;background-size:327px !important}.stk-c1bc3aa:before{background-color:transparent !important;opacity:0.5 !important}@media screen and (max-width:1023px){.stk-c1bc3aa{background-size:34% !important}}@media screen and (max-width:767px){.stk-c1bc3aa{background-position:bottom center !important;background-size:210px !important}}.stk-c1bc3aa{max-width:100% !important;min-width:auto !important}@media screen and (max-width:767px){.stk-c1bc3aa{margin-right:15px !important;margin-left:15px !important}}.stk-c1bc3aa-container{max-width:580px !important;min-width:auto !important;padding-top:30px !important;padding-right:40px !important;padding-bottom:30px !important;padding-left:40px !important}@media screen and (max-width:767px){.stk-c1bc3aa-container{padding-top:8px !important;padding-right:8px !important;padding-bottom:210px !important;padding-left:8px !important}}</style><style class="stk-custom-css">.stk-c1bc3aa.stk-block-column{--container-width:100% !important;background-position:center bottom 0 !important}@media screen and (min-width:768px){.stk-c1bc3aa.stk-block-column{background-position:right 45px bottom 0 !important}}@media screen and (min-width:992px){.stk-c1bc3aa.stk-block-column{background-position:right 40px bottom 0 !important}}</style><div class="stk-column-wrapper stk-block-column__content stk-container stk-c1bc3aa-container stk--no-background stk--no-padding"><div class="stk-block-content stk-inner-blocks stk-c1bc3aa-inner-blocks">
<div class="wp-block-stackable-heading stk-block-heading stk-block stk-3ded1e0" id="你的參與，可以讓報導點亮世界" data-block-id="3ded1e0"><style>.stk-3ded1e0 .stk-block-heading__text{font-size:28px !important;font-family:"SweiMarkerSansCJKtc-Regular",Sans-serif !important}@media screen and (max-width:1023px){.stk-3ded1e0 .stk-block-heading__text{font-size:20px !important}}@media screen and (max-width:767px){.stk-3ded1e0 .stk-block-heading__text{font-size:17px !important}}</style><style class="stk-custom-css">.stk-3ded1e0.stk-block-heading{display:flex !important;align-items:center !important}</style><h3 class="stk-block-heading__text has-text-align-left">你的參與，可以讓報導點亮世界</h3></div>
<div class="wp-block-stackable-text stk-block-text stk-block stk-b3260f7" data-block-id="b3260f7"><style>@media screen and (max-width:1023px){.stk-b3260f7{margin-bottom:150px !important}}@media screen and (max-width:767px){.stk-b3260f7{margin-bottom:45px !important}}.stk-b3260f7 .stk-block-text__text{font-size:16px !important;color:var(--paletteColor4,#232323) !important}@media screen and (max-width:1023px){.stk-b3260f7 .stk-block-text__text{font-size:14px !important}}</style><p class="stk-block-text__text has-text-color">一篇豐富、精彩和專業的報導，要經過記者、攝影、設計師、編輯，還有許多專家才能完成，完成後還要靠著社群編輯、行銷企劃，才能送到你的眼前。我們所有的努力，都希望能幫助你更了解這個世界；更希望聽見你對這個世界發出提問。讓每一篇報導點亮世界，訂閱我們、歡迎投稿。</p></div>
<div class="wp-block-stackable-button-group stk-block-button-group stk-block stk-b130b7f" data-block-id="b130b7f"><style>.stk-b130b7f{max-width:300px !important;min-width:auto !important;margin-right:auto !important;margin-left:0px !important}.stk-b130b7f .stk-inner-blocks{column-gap:20px !important;row-gap:20px !important}</style><style class="stk-custom-css">.stk-b130b7f.stk-block-button-group{flex-wrap:wrap !important}.stk-b130b7f .stk-row{flex-wrap:wrap !important}@media screen and (max-width:767px){.stk-b130b7f.stk-block-button-group{margin-left:auto !important}}</style><div class="stk-row stk-inner-blocks has-text-align-center-mobile stk-block-content stk-button-group">
<div class="wp-block-stackable-button stk-block-button stk-block stk-81e873a" data-block-id="81e873a"><style>.stk-81e873a .stk-button{min-height:49px !important;padding-top:9px !important;padding-right:18px !important;padding-bottom:11px !important;padding-left:18px !important;background:var(--paletteColor6,#F8C341) !important}.stk-81e873a .stk-button{border-radius:30px !important}.stk-81e873a .stk-button__inner-text{color:var(--paletteColor8,#ffffff) !important}</style><a class="stk-link stk-button stk--hover-effect-darken" href="https://forms.gle/bTNgZDAD5VtHKCuT9" target="_blank" rel="noreferrer noopener"><span class="has-text-color stk-button__inner-text">歡迎訂閱</span></a></div>
<div class="wp-block-stackable-button stk-block-button stk-block stk-23c98d2" data-block-id="23c98d2"><style>.stk-23c98d2 .stk-button{min-height:49px !important;padding-top:9px !important;padding-right:18px !important;padding-bottom:11px !important;padding-left:18px !important;background:var(--paletteColor1,#27B5F7) !important}.stk-23c98d2 .stk-button{border-radius:30px !important}.stk-23c98d2 .stk-button__inner-text{color:var(--paletteColor8,#ffffff) !important}</style><a class="stk-link stk-button stk--hover-effect-darken" href="/about#post"><span class="has-text-color stk-button__inner-text">歡迎投稿</span></a></div>
</div></div>
</div></div></div>
</div></div>
</div></article></div>
<div class="ct-related-posts-container">
<div class="ct-container">
<div class="ct-related-posts">
<h3 class="ct-block-title">
<img src="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/post-related-post-title.svg" alt="相關文章">
</h3>
<div class="ct-related-posts-items">
<div class="related-post__glide glide">
<div class="glide__track" data-glide-el="track">
<div class="glide__slides">
<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=5086" subtitle-link="https://kids.twreporter.org/category/news/knowledge/" label-link="https://kids.twreporter.org/category/news/knowledge/medical-knowledge/" color="#27B5F7" type="default">
<span slot="subtitle">
真的假的
</span>
<span slot="title">
服用抗生素也有「三不政策」？
</span>
<span slot="excerpt">鼻竇炎、泌尿道感染或其他細菌感染時，醫師會開給我們抗生素，那你知道，服用抗生素也有3大守則要注意嗎？</span>
<span slot="category">
醫學
</span>
<span slot="date">
2022.05.02
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/10/20190808145615-7c355d3c0f57793220cf021d463c5bec-mobile.jpeg" alt="（插畫／一百隻熊）">
</span>
</post-card> </div>
</article>

<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=3525" subtitle-link="https://kids.twreporter.org/category/comics/graphic-news/" label-link="https://kids.twreporter.org/category/comics/graphic-news/data-news/" color="#F8C341" type="default">
<span slot="subtitle">
圖解新聞
</span>
<span slot="title">
【圖解台灣急診室】急診變「擠診」？急診壅塞4大關鍵
</span>
<span slot="excerpt">你知道嗎？台灣醫學中心的急診室，不只在今年4月本土COVID-19疫情才人滿為患，其實一直以來，都被擠得水泄不通！急診為什麼變成「擠診」？其實有4個關鍵原因！</span>
<span slot="category">
數據新聞
</span>
<span slot="date">
2022.07.22
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/08/急診主圖_20220718_主圖02：急診關鍵字-1024x576.jpg" alt="（插畫／鄭涵文、吳政達）">
</span>
</post-card> </div>
</article>
<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=3419" subtitle-link="https://kids.twreporter.org/category/news/knowledge/" label-link="https://kids.twreporter.org/category/news/knowledge/medical-knowledge/" color="#27B5F7" type="default">
<span slot="subtitle">
真的假的
</span>
<span slot="title">
動物也要打COVID-19疫苗嗎？和人的疫苗一樣嗎...
</span>
<span slot="excerpt">COVID-19全球大流行，人類疫苗都打到第三劑了，那你有想過動物也需要打疫苗嗎？牠們的疫苗和人類的疫苗一樣嗎？</span>
<span slot="category">
醫學
</span>
<span slot="date">
2022.05.05
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/08/20211221134416-eedda875069b5c532d951df3b44500d3-desktop-1024x577.jpeg" alt="（插畫／鄭涵文）">
</span>
</post-card> </div>
</article>
<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=3542" subtitle-link="https://kids.twreporter.org/category/culture/story/" label-link="https://kids.twreporter.org/category/culture/story/career-story/" color="#F76977" type="default">
<span slot="subtitle">
他們的故事
</span>
<span slot="title">
【急診護理師的故事】勇敢，但也會跟著病人流淚──疫...
</span>
<span slot="excerpt">急診室有個靈魂人物俗稱「阿長」，也就是「護理長」，除了處理病患，還得指揮調度醫護人員與資源。讓部桃醫院急診室阿長黃欣萍告訴你，當急診室碰上疫情時，身為護理長...</span>
<span slot="category">
職業前線
</span>
<span slot="date">
2022.07.22
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/08/護理長主圖-1024x682.jpeg" alt="在衛生福利部桃園醫院服務的黃欣萍，2019年11月從門診護理長轉任急診護理長，才沒隔幾個月，就碰上COVID-19疫情。（攝影／陳曉威）">
</span>
</post-card> </div>
</article>
<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=3479" subtitle-link="https://kids.twreporter.org/category/comics/graphic-news/" label-link="https://kids.twreporter.org/category/comics/graphic-news/test/" color="#F8C341" type="default">
<span slot="subtitle">
圖解新聞
</span>
<span slot="title">
王室文化真有趣，8個題目測試一下自己的「達人指數」...
</span>
<span slot="excerpt">女王、國王，不只存在童話故事裡，真實世界中有很多國家保有「君主」。你知道還有哪些國家實行君主制嗎？關於王室又有哪些特殊典故和有趣的小故事呢？來玩個小遊戲，看...</span>
<span slot="category">
新聞測驗
</span>
<span slot="date">
2022.06.03
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/08/王室新聞測驗主圖_V2＿20200531-2-1024x576.jpg" alt="（插畫／鄭涵文）">
</span>
</post-card> </div>
</article>
<article itemscope="itemscope" itemtype="https://schema.org/CreativeWork">
<div class="related-post__glide glide__slide">
<post-card href="https://kids.twreporter.org/?post_type=post&p=3405" subtitle-link="https://kids.twreporter.org/category/news/times/" label-link="https://kids.twreporter.org/category/news/times/medical-news/" color="#27B5F7" type="default">
<span slot="subtitle">
時時刻刻
</span>
<span slot="title">
【10歲感染者心聲】COVID-19沒有那麼可怕，...
</span>
<span slot="excerpt">10歲的Renee，4月中感染COVID-19，生病前4天因為高燒、喉嚨痛比較辛苦，但她覺得沒有比自己以前吃壞肚子、拉肚子的時候難過。接下來Renee會如何...</span>
<span slot="category">
醫學
</span>
<span slot="date">
2022.05.05
</span>
<span slot="image">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/08/感染小朋友篇_主圖-1024x576.png" alt="（插畫／黃禹禛）">
</span>
</post-card> </div>
</article>
</div>
</div>
<div class="glide__arrows" data-glide-el="controls">
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="glide__arrow glide__arrow--left" data-glide-dir="<">
<path d="M27 2C13.1929 2 2 13.1929 2 27C2 40.8071 13.1929 52 27 52C40.8071 52 52 40.8071 52 27C52 13.1929 40.8071 2 27 2Z" fill="var(--theme-color)" stroke="white" stroke-width="3" stroke-miterlimit="10" />
<path d="M29.9297 39.1001L17.9359 27.0002L29.9297 14.9003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="glide__arrow glide__arrow--right" data-glide-dir=">">
<path d="M27 52C40.8071 52 52 40.8071 52 27C52 13.1929 40.8071 2 27 2C13.1929 2 2 13.1929 2 27C2 40.8071 13.1929 52 27 52Z" fill="var(--theme-color)" stroke="white" stroke-width="3" stroke-miterlimit="10" />
<path d="M24.0703 14.8999L36.0641 26.9998L24.0703 39.0997" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</div>
<div class="glide__bullets" data-glide-el="controls[nav]">
<button class="glide__bullet" data-glide-dir="=0">&nbsp;</button>
<button class="glide__bullet" data-glide-dir="=1">&nbsp;</button>
<button class="glide__bullet" data-glide-dir="=2">&nbsp;</button>
<button class="glide__bullet" data-glide-dir="=3">&nbsp;</button>
<button class="glide__bullet" data-glide-dir="=4">&nbsp;</button>
<button class="glide__bullet" data-glide-dir="=5">&nbsp;</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
        new Glide('.related-post__glide.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            autoplay: 4800,
            gap: 45,
            breakpoints: {
                728: {
                    perView: 1,
                    autoplay: 0,
                    peek: 0,
                    focusAt: 'center',
                },
                992: {
                    perView: 2,
                    autoplay: 0,
                    peek: 0,
                    focusAt: null,
                },
            }

        }).mount()
    </script>
<div class="ct-comments-container"><div class="ct-container-narrow">
<div class="ct-comments" id="comments">
<div id="respond" class="comment-respond">
<h2 id="reply-title" class="comment-reply-title">發布留言<span class="ct-cancel-reply"><a rel="nofollow" id="cancel-comment-reply-link" href="/emergency-overstrain-2022-game/#respond" style="display:none;">取消回覆</a></span></h2><form action="https://kids.twreporter.org/wp-comments-post.php" method="post" id="commentform" class="comment-form has-website-field" novalidate><p class="comment-notes"><span id="email-notes">發布留言必須填寫的電子郵件地址不會公開。</span> <span class="required-field-message" aria-hidden="true">必填欄位標示為 <span class="required" aria-hidden="true">*</span></span></p><p class="comment-form-field-input-author">
<label for="author">名稱 <b class="required">&nbsp;*</b></label>
<input id="author" name="author" type="text" value="" size="30" required='required' />
</p>
<p class="comment-form-field-input-email">
<label for="email">電子郵件 <b class="required">&nbsp;*</b></label>
<input id="email" name="email" type="text" value="" size="30" required='required' />
</p>
<p class="comment-form-field-input-url">
<label for="url">網站</label>
<input id="url" name="url" type="text" value="" size="30" />
</p>
<p class="comment-form-field-textarea">
<label for="comment">新增留言</label>
<textarea id="comment" name="comment" cols="45" rows="8" required="required"></textarea>
</p><p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /><label for="wp-comment-cookies-consent">在瀏覽器儲存我的名字，電子郵件和網站以備下次留言時使用。</label></p><p class="form-submit"><button type="submit" name="submit" id="submit" class="submit" value="發布留言">發布留言</button> <input type='hidden' name='comment_post_ID' value='3533' id='comment_post_ID' />
<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
</p></form> </div>
</div>
</div></div> </main>
<div data-block="hook:4115"><article id="post-4115" class="post-4115"><div class="entry-content">
<div class="wp-block-stackable-columns alignfull stk-block-columns stk-block stk-0dc58f0 stk-block-background" data-block-id="0dc58f0"><style>.stk-0dc58f0{background-color:#fafafa !important}.stk-0dc58f0:before{background-color:#fafafa !important}.stk-0dc58f0-column{justify-content:center !important}</style><div class="stk-row stk-inner-blocks stk-block-content stk-content-align stk-0dc58f0-column stk--fit-content alignfull">
<div class="wp-block-stackable-column stk-block-column stk-block-column--v2 stk-column stk-block stk-e1ad890" data-block-id="e1ad890"><div class="stk-column-wrapper stk-block-column__content stk-container stk-e1ad890-container stk--no-background stk--no-padding"><div class="stk-block-content stk-inner-blocks stk-e1ad890-inner-blocks"><div class="footer-top">
<div class="footer-top__left">
<img src="https://kids.twreporter.org/wp-content/themes/blocksy-child/assets/img/footer-logo.svg" alt="少年報導者" class="footer-top__left-logo" width="434">
<p class="footer-top__left-p">
《少年報導者》是由非營利媒體《報導者》針對兒少打造的深度新聞報導品牌，與兒童和少年一起理解世界，參與未來。
</p>
<div class="footer-top__left-social">
<div class="footer-top__social-icon-group">
<a href="https://www.facebook.com/twreporter/" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1831_1593)"> <path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" /> <path d="M14.0001 1.10926e-05C10.4743 -0.00442468 7.07662 1.32164 4.48598 3.71325C1.89534 6.10487 0.302483 9.38591 0.0256641 12.9008C-0.251155 16.4157 0.80845 19.9057 2.99277 22.6733C5.17709 25.441 8.32526 27.2826 11.8083 27.8301V18.0493H8.2576V14H11.8138V10.9151C11.8138 7.40823 13.9014 5.4685 17.1014 5.4685C18.1515 5.48299 19.199 5.57456 20.2357 5.74248V9.18905H18.4713C16.7288 9.18905 16.1864 10.2849 16.1864 11.3808V14.0055H20.0713L19.4521 18.0493H16.1644V27.8301C19.6451 27.283 22.7915 25.4435 24.9757 22.6787C27.1599 19.914 28.2213 16.4273 27.9481 12.9145C27.6749 9.40167 26.0872 6.12103 23.5018 3.72723C20.9164 1.33342 17.5235 0.00248567 14.0001 1.10926e-05Z" fill="#232323" /> </g> <defs> <clipPath id="clip0_1831_1593"> <rect width="28" height="28" fill="white" /> </clipPath> </defs> </svg>
</a>
<a href="https://www.instagram.com/twreporter/" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1596)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M13.9995 16.937C15.6215 16.937 16.9365 15.622 16.9365 14C16.9365 12.3779 15.6215 11.063 13.9995 11.063C12.3774 11.063 11.0625 12.3779 11.0625 14C11.0625 15.622 12.3774 16.937 13.9995 16.937Z" fill="#232323" />
<path d="M20.8717 8.79997C20.7297 8.41784 20.5052 8.07172 20.2142 7.78627C19.9236 7.48965 19.5695 7.26293 19.1785 7.12325C18.6519 6.92927 18.0959 6.82733 17.5347 6.82188C16.6087 6.77805 16.3292 6.76709 13.9731 6.76709C11.6169 6.76709 11.3429 6.76709 10.4114 6.82188C9.85024 6.82733 9.29419 6.92927 8.76758 7.12325C8.39497 7.26897 8.05655 7.49025 7.77364 7.77316C7.49074 8.05606 7.26946 8.39448 7.12374 8.76709C6.92976 9.2937 6.82782 9.84975 6.82237 10.4109C6.77854 11.3424 6.76758 11.6219 6.76758 13.9726C6.76758 16.3233 6.76758 16.6082 6.82237 17.5342C6.82782 18.0954 6.92976 18.6514 7.12374 19.1781C7.26475 19.5607 7.48939 19.907 7.78128 20.1917C8.06673 20.4828 8.41285 20.7073 8.79497 20.8493C9.32105 21.0459 9.87724 21.1497 10.4388 21.1561C11.3703 21.1945 11.6498 21.2054 14.0005 21.2054C16.3511 21.2054 16.6361 21.2054 17.5621 21.1561C18.1237 21.1497 18.6799 21.0459 19.2059 20.8493C19.5853 20.7031 19.9296 20.4788 20.2166 20.1908C20.5035 19.9029 20.7267 19.5578 20.8717 19.1781C21.0683 18.652 21.1721 18.0958 21.1785 17.5342C21.2169 16.6082 21.2279 16.3287 21.2279 13.9726C21.2279 11.6164 21.2279 11.3424 21.1785 10.4109C21.1683 9.86042 21.0646 9.31567 20.8717 8.79997ZM14.0005 18.526C13.1053 18.526 12.2302 18.2605 11.4859 17.7632C10.7416 17.2659 10.1615 16.559 9.81895 15.732C9.47639 14.905 9.38676 13.9949 9.56139 13.117C9.73603 12.239 10.1671 11.4326 10.8001 10.7996C11.433 10.1666 12.2395 9.73554 13.1175 9.56091C13.9954 9.38627 14.9055 9.4759 15.7325 9.81846C16.5595 10.161 17.2664 10.7411 17.7637 11.4854C18.261 12.2297 18.5265 13.1048 18.5265 14C18.5265 15.2003 18.0496 16.3516 17.2008 17.2004C16.352 18.0491 15.2008 18.526 14.0005 18.526ZM18.7073 10.3507C18.4972 10.3506 18.2919 10.288 18.1176 10.1708C17.9432 10.0536 17.8077 9.88711 17.7283 9.69259C17.649 9.49807 17.6294 9.28433 17.672 9.07861C17.7146 8.87289 17.8175 8.68453 17.9676 8.53754C18.1177 8.39055 18.3082 8.2916 18.5148 8.2533C18.7213 8.21501 18.9346 8.2391 19.1274 8.32251C19.3202 8.40593 19.4838 8.54488 19.5974 8.72165C19.7109 8.89842 19.7692 9.105 19.7648 9.31504C19.7605 9.59215 19.647 9.85636 19.449 10.0503C19.251 10.2442 18.9844 10.3521 18.7073 10.3507Z" fill="#232323" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM22.7671 17.6329C22.7529 18.3652 22.6139 19.0897 22.3562 19.7753C22.1316 20.3613 21.7863 20.8934 21.3426 21.3371C20.8989 21.7808 20.3668 22.1262 19.7808 22.3507C19.0952 22.6084 18.3707 22.7474 17.6384 22.7616C16.7014 22.8055 16.4 22.8164 14.0055 22.8164C11.611 22.8164 11.3096 22.8164 10.3726 22.7616C9.63672 22.7475 8.90857 22.6085 8.21918 22.3507C7.63206 22.1285 7.0995 21.7828 6.65754 21.337C6.21091 20.8957 5.8651 20.3629 5.64384 19.7753C5.38609 19.0897 5.24711 18.3652 5.23288 17.6329C5.18905 16.6959 5.17809 16.3945 5.17809 14C5.17809 11.6055 5.17809 11.3041 5.23288 10.3671C5.24941 9.63276 5.39021 8.90651 5.64932 8.21918C5.87385 7.63323 6.21919 7.10111 6.66289 6.6574C7.10659 6.2137 7.63872 5.86836 8.22466 5.64384C8.91059 5.38721 9.63493 5.24827 10.3671 5.23288C11.3041 5.18904 11.6055 5.17808 14 5.17808C16.3945 5.17808 16.6959 5.17808 17.6329 5.23288C18.3652 5.2471 19.0897 5.38608 19.7753 5.64384C20.3629 5.86509 20.8957 6.21091 21.337 6.65753C21.7828 7.09949 22.1285 7.63205 22.3507 8.21918C22.6073 8.9051 22.7463 9.62945 22.7617 10.3616C22.8055 11.2986 22.8164 11.6 22.8164 13.9945C22.8164 16.389 22.8055 16.6959 22.7617 17.6329H22.7671Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1596">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://twitter.com/tw_reporter_org" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1601)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM21.737 11.0082C21.737 11.1671 21.737 11.326 21.737 11.4849C21.737 16.4164 18 22.0658 11.1617 22.0658C9.1468 22.0631 7.17491 21.4831 5.47946 20.3945C5.77419 20.4276 6.07055 20.4441 6.36713 20.4438C8.03241 20.4429 9.64925 19.8834 10.9589 18.8548C10.1868 18.8361 9.43966 18.5776 8.8211 18.1152C8.20254 17.6527 7.74322 17.0092 7.50686 16.274C8.06347 16.38 8.63696 16.3575 9.18357 16.2082C8.34183 16.0396 7.58463 15.5842 7.04107 14.9197C6.49751 14.2553 6.20123 13.4229 6.20275 12.5644V12.5151C6.71746 12.8043 7.29475 12.9641 7.88494 12.9808C7.09746 12.4551 6.54004 11.6489 6.32624 10.7266C6.11244 9.80418 6.25836 8.83498 6.73425 8.01644C7.66837 9.16643 8.83427 10.1067 10.156 10.7761C11.4778 11.4455 12.9257 11.8289 14.4055 11.9014C14.3436 11.6244 14.3123 11.3414 14.3123 11.0575C14.3121 10.3116 14.5361 9.58281 14.9552 8.96576C15.3743 8.34871 15.9693 7.8719 16.6628 7.59721C17.3563 7.32252 18.1164 7.26263 18.8444 7.42533C19.5724 7.58803 20.2346 7.96579 20.7452 8.50959C21.5773 8.34473 22.3757 8.04094 23.1069 7.61096C22.8253 8.47206 22.2413 9.20201 21.463 9.66575C22.2007 9.57873 22.9212 9.38108 23.6 9.07945C23.0986 9.82801 22.4677 10.4812 21.737 11.0082Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1601">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://medium.com/twreporter" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1604)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05844 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM14.9863 14.7507C14.9251 15.1689 14.8167 15.5788 14.663 15.9726C14.1449 17.275 13.138 18.3231 11.8575 18.8932C11.2302 19.1707 10.5543 19.3215 9.8685 19.337C9.3354 19.354 8.80293 19.2874 8.29042 19.1397C7.56799 18.9326 6.89884 18.5719 6.32877 18.0822C5.78007 17.6219 5.32984 17.0556 5.00503 16.4173C4.68021 15.7789 4.48748 15.0817 4.43836 14.3671C4.40829 13.9332 4.43037 13.4972 4.50412 13.0685C4.63229 12.3411 4.90977 11.6481 5.31906 11.0332C5.72835 10.4183 6.26058 9.89487 6.8822 9.49589C7.62853 9.01163 8.48735 8.72851 9.37535 8.67397H9.55069H9.95069H10.2082C10.5123 8.69711 10.8133 8.75034 11.1069 8.83288C12.3575 9.18342 13.4392 9.97452 14.1522 11.0602C14.8652 12.1458 15.1615 13.4527 14.9863 14.7397V14.7507ZM20.8219 14.537C20.8219 14.7836 20.7836 15.0356 20.7507 15.2822C20.6525 16.1109 20.3997 16.9138 20.0055 17.6493C19.835 17.9704 19.6149 18.2626 19.3534 18.5151C19.1236 18.739 18.8409 18.9011 18.5315 18.9863C18.1951 19.0614 17.8431 19.0188 17.5342 18.8658C17.2577 18.7187 17.0136 18.5174 16.8164 18.274C16.5225 17.9143 16.2859 17.5114 16.1151 17.0795C15.9198 16.5903 15.7783 16.0814 15.6932 15.5616C15.5972 14.9988 15.5532 14.4284 15.5616 13.8575C15.5626 13.4909 15.5882 13.1248 15.6384 12.7616C15.7071 12.2217 15.8339 11.6908 16.0164 11.1781C16.1705 10.7247 16.3902 10.2965 16.6685 9.90685C16.852 9.64757 17.0802 9.42306 17.3425 9.24384C17.5628 9.09504 17.8173 9.00454 18.0822 8.98082C18.3603 8.95582 18.6399 9.01096 18.8877 9.13973C19.156 9.2758 19.3959 9.46177 19.5945 9.68767C19.9124 10.0747 20.1642 10.5117 20.3397 10.9808C20.5228 11.4493 20.6551 11.9361 20.7342 12.4329C20.8147 12.9054 20.8569 13.3837 20.8603 13.863V13.9452C20.8548 14.1589 20.8548 14.3452 20.8219 14.537ZM23.2164 14.4V14.4384C23.2164 14.8548 23.1781 15.2712 23.1507 15.6877C23.1081 16.2856 23.0183 16.8792 22.8822 17.463C22.8229 17.7103 22.7385 17.9508 22.6301 18.1808C22.5846 18.2775 22.5214 18.3648 22.4438 18.4384C22.4229 18.4601 22.3978 18.4773 22.37 18.4891C22.3422 18.5009 22.3124 18.507 22.2822 18.507C22.252 18.507 22.2222 18.5009 22.1944 18.4891C22.1666 18.4773 22.1415 18.4601 22.1205 18.4384C22.0278 18.3562 21.9564 18.2528 21.9123 18.137C21.8005 17.8875 21.716 17.6266 21.6603 17.3589C21.5764 16.981 21.5142 16.5987 21.474 16.2137C21.3978 15.5132 21.3631 14.8087 21.3699 14.1041C21.3699 13.7096 21.3699 13.3151 21.3699 12.9205C21.3915 12.2134 21.474 11.5094 21.6164 10.8164C21.6761 10.4871 21.7773 10.1668 21.9178 9.86301C21.9615 9.75557 22.0247 9.65712 22.1041 9.5726C22.1261 9.54416 22.1544 9.52114 22.1867 9.5053C22.219 9.48947 22.2544 9.48123 22.2904 9.48123C22.3264 9.48123 22.3619 9.48947 22.3942 9.5053C22.4265 9.52114 22.4547 9.54416 22.4767 9.5726C22.5743 9.6765 22.6489 9.7997 22.6959 9.93425C22.8062 10.2066 22.8888 10.4893 22.9425 10.7781C23.0314 11.1997 23.0972 11.626 23.1397 12.0548C23.2 12.6521 23.2274 13.2548 23.2329 13.8575V14.4055L23.2164 14.4Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1604">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://github.com/twreporter" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1607)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14.0002 -5.61702e-05C10.5662 -0.00202214 7.25116 1.25824 4.68569 3.54104C2.12023 5.82385 0.483265 8.96994 0.0861461 12.381C-0.310973 15.792 0.559453 19.23 2.53188 22.0411C4.5043 24.8522 7.44113 26.8403 10.7838 27.6273C10.7838 26.1862 10.7838 23.9616 10.7838 23.4082V23.3369H10.718C10.3256 23.4108 9.92811 23.4547 9.529 23.4684C8.99098 23.4984 8.45209 23.4278 7.93996 23.2602C7.61017 23.1609 7.30694 22.9887 7.05274 22.7563C6.79854 22.5239 6.59987 22.2373 6.47147 21.9178C6.2612 21.4077 5.98287 20.9285 5.64407 20.4931C5.47435 20.2707 5.26199 20.0845 5.01941 19.9452C4.92794 19.8982 4.84317 19.8393 4.76736 19.7698C4.66306 19.6965 4.57839 19.5986 4.52078 19.4849C4.50695 19.4628 4.49821 19.4379 4.49519 19.412C4.49218 19.3862 4.49498 19.3599 4.50337 19.3353C4.51177 19.3106 4.52556 19.2881 4.54374 19.2694C4.56191 19.2508 4.58402 19.2364 4.60846 19.2273C4.65758 19.2052 4.70905 19.1887 4.76188 19.178C5.20012 19.0865 5.65677 19.1712 6.03311 19.4136C6.47859 19.6888 6.85381 20.0641 7.129 20.5095C7.23699 20.6876 7.3598 20.8562 7.49613 21.0136C7.69961 21.2582 7.94978 21.4597 8.23202 21.6065C8.51426 21.7532 8.82292 21.8423 9.13996 21.8684C9.71454 21.9081 10.2897 21.8006 10.8112 21.5561C10.8327 21.5421 10.8484 21.5206 10.855 21.4958C10.8879 21.3369 10.9153 21.1726 10.9591 21.0191C11.0703 20.5691 11.308 20.1603 11.6441 19.841L11.0359 19.726C10.4575 19.6423 9.88865 19.5029 9.33722 19.3095C8.66128 19.0677 8.03945 18.6953 7.50709 18.2136C6.89214 17.6408 6.43381 16.9203 6.17558 16.1205C5.91799 15.307 5.78678 14.4587 5.78654 13.6054C5.77208 13.0508 5.83853 12.497 5.9838 11.9616C6.19666 11.2384 6.57143 10.5732 7.07969 10.0164C7.07969 9.98899 7.129 9.96707 7.11256 9.91775C6.98887 9.58091 6.91145 9.22884 6.88243 8.87118C6.81737 8.08993 6.93363 7.30421 7.22215 6.57529C7.22215 6.57529 7.26051 6.52597 7.28243 6.52597C7.44114 6.51502 7.60042 6.51502 7.75914 6.52597C8.17691 6.57467 8.58506 6.68548 8.9701 6.85474C9.58872 7.11916 10.1797 7.44403 10.7345 7.8246C10.7523 7.83374 10.772 7.8385 10.792 7.8385C10.812 7.8385 10.8317 7.83374 10.8496 7.8246C11.6778 7.59688 12.5286 7.46091 13.3865 7.41912C14.0427 7.38534 14.7004 7.40366 15.3537 7.47392C15.968 7.54235 16.5762 7.65775 17.1728 7.81912C17.1941 7.82974 17.2176 7.83526 17.2413 7.83526C17.2651 7.83526 17.2886 7.82974 17.3098 7.81912C17.655 7.60542 18.0002 7.38625 18.3619 7.18899C18.873 6.89325 19.4279 6.68056 20.0057 6.55885C20.2481 6.50219 20.4985 6.4892 20.7454 6.52049C20.7613 6.524 20.7762 6.53067 20.7894 6.54008C20.8026 6.54949 20.8137 6.56147 20.8222 6.57529C21.0225 7.08332 21.1426 7.6194 21.1783 8.16433C21.2206 8.73995 21.1441 9.31811 20.9537 9.86296C20.9423 9.88964 20.9394 9.91915 20.9453 9.94755C20.9511 9.97594 20.9655 10.0019 20.9865 10.0219C21.7797 10.9028 22.2256 12.042 22.2413 13.2273C22.2413 13.6054 22.2413 13.989 22.203 14.3725C22.1642 14.9462 22.0556 15.5129 21.8797 16.0602C21.6891 16.6923 21.3704 17.2783 20.9433 17.7817C20.5162 18.2852 19.99 18.6952 19.3975 18.9862C18.5617 19.3759 17.6676 19.6258 16.7509 19.726L16.3674 19.7753L16.4002 19.8136C16.5676 19.9714 16.7066 20.1567 16.8112 20.3616C17.0895 20.8642 17.2311 21.431 17.2222 22.0054C17.2222 22.8821 17.2222 26.3068 17.2222 27.6493C20.5872 26.8821 23.5502 24.8989 25.5424 22.0806C27.5346 19.2622 28.4156 15.8073 28.0161 12.3791C27.6166 8.9509 25.9649 5.7911 23.378 3.50632C20.7912 1.22155 17.4515 -0.027159 14.0002 -5.61702e-05Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1607">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://public.twreporter.org/rss/twreporter-rss.xml" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1610)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM10.7726 20.5425C10.4051 20.882 9.945 21.1048 9.45069 21.1825C8.95639 21.2602 8.45014 21.1894 7.99616 20.9789C7.54218 20.7685 7.16092 20.428 6.90073 20.0006C6.64054 19.5732 6.51316 19.0781 6.53472 18.5782C6.55629 18.0783 6.72584 17.5961 7.02187 17.1927C7.31791 16.7893 7.72708 16.4829 8.19749 16.3123C8.66791 16.1418 9.17838 16.1148 9.66415 16.2348C10.1499 16.3548 10.5891 16.6163 10.926 16.9863C11.3723 17.4806 11.6063 18.1305 11.5776 18.7958C11.5489 19.4611 11.2598 20.0885 10.7726 20.5425ZM17.5781 19.9014C17.5109 20.2678 17.315 20.5981 17.0257 20.8327C16.7364 21.0674 16.3728 21.1909 16.0004 21.1809C15.6281 21.171 15.2715 21.0283 14.9951 20.7786C14.7187 20.5289 14.5407 20.1886 14.4932 19.8192C14.4548 19.3644 14.4932 18.9096 14.4548 18.4493C14.4348 17.7485 14.2656 17.0601 13.9585 16.4299C13.6515 15.7996 13.2135 15.2421 12.674 14.7945C11.7614 14.0045 10.5933 13.5723 9.38631 13.5781C9.0137 13.5781 8.6411 13.5781 8.29042 13.5781C8.00963 13.5792 7.73363 13.5054 7.49089 13.3642C7.24816 13.2231 7.04747 13.0198 6.90955 12.7752C6.77162 12.5306 6.70145 12.2536 6.70628 11.9729C6.7111 11.6922 6.79075 11.4178 6.93699 11.1781C7.06429 10.9487 7.24988 10.7569 7.47502 10.6222C7.70015 10.4875 7.95686 10.4147 8.21918 10.411C9.40744 10.3463 10.5985 10.4702 11.748 10.7781C13.0809 11.1814 14.2894 11.9167 15.2603 12.9151C16.2866 13.9576 17.0117 15.2583 17.3589 16.6795C17.6253 17.7315 17.6996 18.823 17.5781 19.9014ZM22.8712 19.726C22.8655 20.0568 22.7456 20.3755 22.5319 20.6281C22.3183 20.8807 22.0239 21.0518 21.6986 21.1123C21.38 21.1754 21.0494 21.1263 20.7629 20.9736C20.4763 20.8208 20.2513 20.5736 20.126 20.274C20.0303 20.0337 19.9856 19.7762 19.9945 19.5178C20.0464 18.3912 19.9431 17.2629 19.6877 16.1644C19.1232 13.8255 17.7851 11.7459 15.8904 10.263C14.0018 8.7336 11.6467 7.89638 9.21644 7.89041H8.24658C7.97774 7.90291 7.71074 7.84016 7.4756 7.70922C7.24047 7.57828 7.04653 7.38435 6.91558 7.14921C6.78464 6.91408 6.72189 6.64708 6.73438 6.37824C6.74687 6.1094 6.83412 5.84937 6.98631 5.6274C7.00054 5.60335 7.01159 5.57757 7.01918 5.55068L7.32055 5.25479C7.71866 5.04331 8.17086 4.95554 8.61918 5.00274C10.1982 4.97924 11.7713 5.20106 13.2822 5.66027C15.5019 6.36314 17.5078 7.61585 19.1134 9.30194C20.719 10.988 21.8722 13.0528 22.4658 15.3041C22.8329 16.7475 22.9698 18.2399 22.8712 19.726Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1610">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
</div> </div>
</div>
<div class="footer-top__middle">
<div class="footer-top__team-box">
<a href="/about" class="footer-top__team-box-item"><img src="https://kids.twreporter.org/wp-content/uploads/2022/10/footer_pic1.svg" alt="我們是誰">我們是誰</a>
<a href="/about#team" class="footer-top__team-box-item"><img src="https://kids.twreporter.org/wp-content/uploads/2022/10/footer_pic2.svg" alt="我們是誰">核心團隊</a>
<a href="/about#consultor" class="footer-top__team-box-item"><img src="https://kids.twreporter.org/wp-content/uploads/2022/10/footer_pic3.svg" alt="我們是誰">顧問群</a>
<a href="/about#mail" class="footer-top__team-box-item"><img src="https://kids.twreporter.org/wp-content/uploads/2022/10/footer_pic4.svg" alt="我們是誰">聯絡我們</a>
</div>
<div class="footer-top__button-group">
<a href="https://support.twreporter.org/" class="header-left__btn-1 rpjr-btn rpjr-btn-big" target="_blank">贊助我們</a>
<a href="https://forms.gle/bTNgZDAD5VtHKCuT9" target="_blank" class="header-left__btn-1 rpjr-btn rpjr-btn-orange rpjr-btn-big">訂閱我們</a>
<a href="https://www.twreporter.org/" class="header-left__btn-1 rpjr-btn rpjr-btn-red rpjr-btn-big" target="_blank">前往報導者</a>
</div>
<div class="footer-top__left-social-m">
<div class="footer-top__social-icon-group">
<a href="https://www.facebook.com/twreporter/" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1831_1593)"> <path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" /> <path d="M14.0001 1.10926e-05C10.4743 -0.00442468 7.07662 1.32164 4.48598 3.71325C1.89534 6.10487 0.302483 9.38591 0.0256641 12.9008C-0.251155 16.4157 0.80845 19.9057 2.99277 22.6733C5.17709 25.441 8.32526 27.2826 11.8083 27.8301V18.0493H8.2576V14H11.8138V10.9151C11.8138 7.40823 13.9014 5.4685 17.1014 5.4685C18.1515 5.48299 19.199 5.57456 20.2357 5.74248V9.18905H18.4713C16.7288 9.18905 16.1864 10.2849 16.1864 11.3808V14.0055H20.0713L19.4521 18.0493H16.1644V27.8301C19.6451 27.283 22.7915 25.4435 24.9757 22.6787C27.1599 19.914 28.2213 16.4273 27.9481 12.9145C27.6749 9.40167 26.0872 6.12103 23.5018 3.72723C20.9164 1.33342 17.5235 0.00248567 14.0001 1.10926e-05Z" fill="#232323" /> </g> <defs> <clipPath id="clip0_1831_1593"> <rect width="28" height="28" fill="white" /> </clipPath> </defs> </svg>
</a>
<a href="https://www.instagram.com/twreporter/" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1596)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M13.9995 16.937C15.6215 16.937 16.9365 15.622 16.9365 14C16.9365 12.3779 15.6215 11.063 13.9995 11.063C12.3774 11.063 11.0625 12.3779 11.0625 14C11.0625 15.622 12.3774 16.937 13.9995 16.937Z" fill="#232323" />
<path d="M20.8717 8.79997C20.7297 8.41784 20.5052 8.07172 20.2142 7.78627C19.9236 7.48965 19.5695 7.26293 19.1785 7.12325C18.6519 6.92927 18.0959 6.82733 17.5347 6.82188C16.6087 6.77805 16.3292 6.76709 13.9731 6.76709C11.6169 6.76709 11.3429 6.76709 10.4114 6.82188C9.85024 6.82733 9.29419 6.92927 8.76758 7.12325C8.39497 7.26897 8.05655 7.49025 7.77364 7.77316C7.49074 8.05606 7.26946 8.39448 7.12374 8.76709C6.92976 9.2937 6.82782 9.84975 6.82237 10.4109C6.77854 11.3424 6.76758 11.6219 6.76758 13.9726C6.76758 16.3233 6.76758 16.6082 6.82237 17.5342C6.82782 18.0954 6.92976 18.6514 7.12374 19.1781C7.26475 19.5607 7.48939 19.907 7.78128 20.1917C8.06673 20.4828 8.41285 20.7073 8.79497 20.8493C9.32105 21.0459 9.87724 21.1497 10.4388 21.1561C11.3703 21.1945 11.6498 21.2054 14.0005 21.2054C16.3511 21.2054 16.6361 21.2054 17.5621 21.1561C18.1237 21.1497 18.6799 21.0459 19.2059 20.8493C19.5853 20.7031 19.9296 20.4788 20.2166 20.1908C20.5035 19.9029 20.7267 19.5578 20.8717 19.1781C21.0683 18.652 21.1721 18.0958 21.1785 17.5342C21.2169 16.6082 21.2279 16.3287 21.2279 13.9726C21.2279 11.6164 21.2279 11.3424 21.1785 10.4109C21.1683 9.86042 21.0646 9.31567 20.8717 8.79997ZM14.0005 18.526C13.1053 18.526 12.2302 18.2605 11.4859 17.7632C10.7416 17.2659 10.1615 16.559 9.81895 15.732C9.47639 14.905 9.38676 13.9949 9.56139 13.117C9.73603 12.239 10.1671 11.4326 10.8001 10.7996C11.433 10.1666 12.2395 9.73554 13.1175 9.56091C13.9954 9.38627 14.9055 9.4759 15.7325 9.81846C16.5595 10.161 17.2664 10.7411 17.7637 11.4854C18.261 12.2297 18.5265 13.1048 18.5265 14C18.5265 15.2003 18.0496 16.3516 17.2008 17.2004C16.352 18.0491 15.2008 18.526 14.0005 18.526ZM18.7073 10.3507C18.4972 10.3506 18.2919 10.288 18.1176 10.1708C17.9432 10.0536 17.8077 9.88711 17.7283 9.69259C17.649 9.49807 17.6294 9.28433 17.672 9.07861C17.7146 8.87289 17.8175 8.68453 17.9676 8.53754C18.1177 8.39055 18.3082 8.2916 18.5148 8.2533C18.7213 8.21501 18.9346 8.2391 19.1274 8.32251C19.3202 8.40593 19.4838 8.54488 19.5974 8.72165C19.7109 8.89842 19.7692 9.105 19.7648 9.31504C19.7605 9.59215 19.647 9.85636 19.449 10.0503C19.251 10.2442 18.9844 10.3521 18.7073 10.3507Z" fill="#232323" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM22.7671 17.6329C22.7529 18.3652 22.6139 19.0897 22.3562 19.7753C22.1316 20.3613 21.7863 20.8934 21.3426 21.3371C20.8989 21.7808 20.3668 22.1262 19.7808 22.3507C19.0952 22.6084 18.3707 22.7474 17.6384 22.7616C16.7014 22.8055 16.4 22.8164 14.0055 22.8164C11.611 22.8164 11.3096 22.8164 10.3726 22.7616C9.63672 22.7475 8.90857 22.6085 8.21918 22.3507C7.63206 22.1285 7.0995 21.7828 6.65754 21.337C6.21091 20.8957 5.8651 20.3629 5.64384 19.7753C5.38609 19.0897 5.24711 18.3652 5.23288 17.6329C5.18905 16.6959 5.17809 16.3945 5.17809 14C5.17809 11.6055 5.17809 11.3041 5.23288 10.3671C5.24941 9.63276 5.39021 8.90651 5.64932 8.21918C5.87385 7.63323 6.21919 7.10111 6.66289 6.6574C7.10659 6.2137 7.63872 5.86836 8.22466 5.64384C8.91059 5.38721 9.63493 5.24827 10.3671 5.23288C11.3041 5.18904 11.6055 5.17808 14 5.17808C16.3945 5.17808 16.6959 5.17808 17.6329 5.23288C18.3652 5.2471 19.0897 5.38608 19.7753 5.64384C20.3629 5.86509 20.8957 6.21091 21.337 6.65753C21.7828 7.09949 22.1285 7.63205 22.3507 8.21918C22.6073 8.9051 22.7463 9.62945 22.7617 10.3616C22.8055 11.2986 22.8164 11.6 22.8164 13.9945C22.8164 16.389 22.8055 16.6959 22.7617 17.6329H22.7671Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1596">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://twitter.com/tw_reporter_org" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1601)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM21.737 11.0082C21.737 11.1671 21.737 11.326 21.737 11.4849C21.737 16.4164 18 22.0658 11.1617 22.0658C9.1468 22.0631 7.17491 21.4831 5.47946 20.3945C5.77419 20.4276 6.07055 20.4441 6.36713 20.4438C8.03241 20.4429 9.64925 19.8834 10.9589 18.8548C10.1868 18.8361 9.43966 18.5776 8.8211 18.1152C8.20254 17.6527 7.74322 17.0092 7.50686 16.274C8.06347 16.38 8.63696 16.3575 9.18357 16.2082C8.34183 16.0396 7.58463 15.5842 7.04107 14.9197C6.49751 14.2553 6.20123 13.4229 6.20275 12.5644V12.5151C6.71746 12.8043 7.29475 12.9641 7.88494 12.9808C7.09746 12.4551 6.54004 11.6489 6.32624 10.7266C6.11244 9.80418 6.25836 8.83498 6.73425 8.01644C7.66837 9.16643 8.83427 10.1067 10.156 10.7761C11.4778 11.4455 12.9257 11.8289 14.4055 11.9014C14.3436 11.6244 14.3123 11.3414 14.3123 11.0575C14.3121 10.3116 14.5361 9.58281 14.9552 8.96576C15.3743 8.34871 15.9693 7.8719 16.6628 7.59721C17.3563 7.32252 18.1164 7.26263 18.8444 7.42533C19.5724 7.58803 20.2346 7.96579 20.7452 8.50959C21.5773 8.34473 22.3757 8.04094 23.1069 7.61096C22.8253 8.47206 22.2413 9.20201 21.463 9.66575C22.2007 9.57873 22.9212 9.38108 23.6 9.07945C23.0986 9.82801 22.4677 10.4812 21.737 11.0082Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1601">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://medium.com/twreporter" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1604)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05844 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM14.9863 14.7507C14.9251 15.1689 14.8167 15.5788 14.663 15.9726C14.1449 17.275 13.138 18.3231 11.8575 18.8932C11.2302 19.1707 10.5543 19.3215 9.8685 19.337C9.3354 19.354 8.80293 19.2874 8.29042 19.1397C7.56799 18.9326 6.89884 18.5719 6.32877 18.0822C5.78007 17.6219 5.32984 17.0556 5.00503 16.4173C4.68021 15.7789 4.48748 15.0817 4.43836 14.3671C4.40829 13.9332 4.43037 13.4972 4.50412 13.0685C4.63229 12.3411 4.90977 11.6481 5.31906 11.0332C5.72835 10.4183 6.26058 9.89487 6.8822 9.49589C7.62853 9.01163 8.48735 8.72851 9.37535 8.67397H9.55069H9.95069H10.2082C10.5123 8.69711 10.8133 8.75034 11.1069 8.83288C12.3575 9.18342 13.4392 9.97452 14.1522 11.0602C14.8652 12.1458 15.1615 13.4527 14.9863 14.7397V14.7507ZM20.8219 14.537C20.8219 14.7836 20.7836 15.0356 20.7507 15.2822C20.6525 16.1109 20.3997 16.9138 20.0055 17.6493C19.835 17.9704 19.6149 18.2626 19.3534 18.5151C19.1236 18.739 18.8409 18.9011 18.5315 18.9863C18.1951 19.0614 17.8431 19.0188 17.5342 18.8658C17.2577 18.7187 17.0136 18.5174 16.8164 18.274C16.5225 17.9143 16.2859 17.5114 16.1151 17.0795C15.9198 16.5903 15.7783 16.0814 15.6932 15.5616C15.5972 14.9988 15.5532 14.4284 15.5616 13.8575C15.5626 13.4909 15.5882 13.1248 15.6384 12.7616C15.7071 12.2217 15.8339 11.6908 16.0164 11.1781C16.1705 10.7247 16.3902 10.2965 16.6685 9.90685C16.852 9.64757 17.0802 9.42306 17.3425 9.24384C17.5628 9.09504 17.8173 9.00454 18.0822 8.98082C18.3603 8.95582 18.6399 9.01096 18.8877 9.13973C19.156 9.2758 19.3959 9.46177 19.5945 9.68767C19.9124 10.0747 20.1642 10.5117 20.3397 10.9808C20.5228 11.4493 20.6551 11.9361 20.7342 12.4329C20.8147 12.9054 20.8569 13.3837 20.8603 13.863V13.9452C20.8548 14.1589 20.8548 14.3452 20.8219 14.537ZM23.2164 14.4V14.4384C23.2164 14.8548 23.1781 15.2712 23.1507 15.6877C23.1081 16.2856 23.0183 16.8792 22.8822 17.463C22.8229 17.7103 22.7385 17.9508 22.6301 18.1808C22.5846 18.2775 22.5214 18.3648 22.4438 18.4384C22.4229 18.4601 22.3978 18.4773 22.37 18.4891C22.3422 18.5009 22.3124 18.507 22.2822 18.507C22.252 18.507 22.2222 18.5009 22.1944 18.4891C22.1666 18.4773 22.1415 18.4601 22.1205 18.4384C22.0278 18.3562 21.9564 18.2528 21.9123 18.137C21.8005 17.8875 21.716 17.6266 21.6603 17.3589C21.5764 16.981 21.5142 16.5987 21.474 16.2137C21.3978 15.5132 21.3631 14.8087 21.3699 14.1041C21.3699 13.7096 21.3699 13.3151 21.3699 12.9205C21.3915 12.2134 21.474 11.5094 21.6164 10.8164C21.6761 10.4871 21.7773 10.1668 21.9178 9.86301C21.9615 9.75557 22.0247 9.65712 22.1041 9.5726C22.1261 9.54416 22.1544 9.52114 22.1867 9.5053C22.219 9.48947 22.2544 9.48123 22.2904 9.48123C22.3264 9.48123 22.3619 9.48947 22.3942 9.5053C22.4265 9.52114 22.4547 9.54416 22.4767 9.5726C22.5743 9.6765 22.6489 9.7997 22.6959 9.93425C22.8062 10.2066 22.8888 10.4893 22.9425 10.7781C23.0314 11.1997 23.0972 11.626 23.1397 12.0548C23.2 12.6521 23.2274 13.2548 23.2329 13.8575V14.4055L23.2164 14.4Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1604">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://github.com/twreporter" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1607)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14.0002 -5.61702e-05C10.5662 -0.00202214 7.25116 1.25824 4.68569 3.54104C2.12023 5.82385 0.483265 8.96994 0.0861461 12.381C-0.310973 15.792 0.559453 19.23 2.53188 22.0411C4.5043 24.8522 7.44113 26.8403 10.7838 27.6273C10.7838 26.1862 10.7838 23.9616 10.7838 23.4082V23.3369H10.718C10.3256 23.4108 9.92811 23.4547 9.529 23.4684C8.99098 23.4984 8.45209 23.4278 7.93996 23.2602C7.61017 23.1609 7.30694 22.9887 7.05274 22.7563C6.79854 22.5239 6.59987 22.2373 6.47147 21.9178C6.2612 21.4077 5.98287 20.9285 5.64407 20.4931C5.47435 20.2707 5.26199 20.0845 5.01941 19.9452C4.92794 19.8982 4.84317 19.8393 4.76736 19.7698C4.66306 19.6965 4.57839 19.5986 4.52078 19.4849C4.50695 19.4628 4.49821 19.4379 4.49519 19.412C4.49218 19.3862 4.49498 19.3599 4.50337 19.3353C4.51177 19.3106 4.52556 19.2881 4.54374 19.2694C4.56191 19.2508 4.58402 19.2364 4.60846 19.2273C4.65758 19.2052 4.70905 19.1887 4.76188 19.178C5.20012 19.0865 5.65677 19.1712 6.03311 19.4136C6.47859 19.6888 6.85381 20.0641 7.129 20.5095C7.23699 20.6876 7.3598 20.8562 7.49613 21.0136C7.69961 21.2582 7.94978 21.4597 8.23202 21.6065C8.51426 21.7532 8.82292 21.8423 9.13996 21.8684C9.71454 21.9081 10.2897 21.8006 10.8112 21.5561C10.8327 21.5421 10.8484 21.5206 10.855 21.4958C10.8879 21.3369 10.9153 21.1726 10.9591 21.0191C11.0703 20.5691 11.308 20.1603 11.6441 19.841L11.0359 19.726C10.4575 19.6423 9.88865 19.5029 9.33722 19.3095C8.66128 19.0677 8.03945 18.6953 7.50709 18.2136C6.89214 17.6408 6.43381 16.9203 6.17558 16.1205C5.91799 15.307 5.78678 14.4587 5.78654 13.6054C5.77208 13.0508 5.83853 12.497 5.9838 11.9616C6.19666 11.2384 6.57143 10.5732 7.07969 10.0164C7.07969 9.98899 7.129 9.96707 7.11256 9.91775C6.98887 9.58091 6.91145 9.22884 6.88243 8.87118C6.81737 8.08993 6.93363 7.30421 7.22215 6.57529C7.22215 6.57529 7.26051 6.52597 7.28243 6.52597C7.44114 6.51502 7.60042 6.51502 7.75914 6.52597C8.17691 6.57467 8.58506 6.68548 8.9701 6.85474C9.58872 7.11916 10.1797 7.44403 10.7345 7.8246C10.7523 7.83374 10.772 7.8385 10.792 7.8385C10.812 7.8385 10.8317 7.83374 10.8496 7.8246C11.6778 7.59688 12.5286 7.46091 13.3865 7.41912C14.0427 7.38534 14.7004 7.40366 15.3537 7.47392C15.968 7.54235 16.5762 7.65775 17.1728 7.81912C17.1941 7.82974 17.2176 7.83526 17.2413 7.83526C17.2651 7.83526 17.2886 7.82974 17.3098 7.81912C17.655 7.60542 18.0002 7.38625 18.3619 7.18899C18.873 6.89325 19.4279 6.68056 20.0057 6.55885C20.2481 6.50219 20.4985 6.4892 20.7454 6.52049C20.7613 6.524 20.7762 6.53067 20.7894 6.54008C20.8026 6.54949 20.8137 6.56147 20.8222 6.57529C21.0225 7.08332 21.1426 7.6194 21.1783 8.16433C21.2206 8.73995 21.1441 9.31811 20.9537 9.86296C20.9423 9.88964 20.9394 9.91915 20.9453 9.94755C20.9511 9.97594 20.9655 10.0019 20.9865 10.0219C21.7797 10.9028 22.2256 12.042 22.2413 13.2273C22.2413 13.6054 22.2413 13.989 22.203 14.3725C22.1642 14.9462 22.0556 15.5129 21.8797 16.0602C21.6891 16.6923 21.3704 17.2783 20.9433 17.7817C20.5162 18.2852 19.99 18.6952 19.3975 18.9862C18.5617 19.3759 17.6676 19.6258 16.7509 19.726L16.3674 19.7753L16.4002 19.8136C16.5676 19.9714 16.7066 20.1567 16.8112 20.3616C17.0895 20.8642 17.2311 21.431 17.2222 22.0054C17.2222 22.8821 17.2222 26.3068 17.2222 27.6493C20.5872 26.8821 23.5502 24.8989 25.5424 22.0806C27.5346 19.2622 28.4156 15.8073 28.0161 12.3791C27.6166 8.9509 25.9649 5.7911 23.378 3.50632C20.7912 1.22155 17.4515 -0.027159 14.0002 -5.61702e-05Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1607">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
<a href="https://public.twreporter.org/rss/twreporter-rss.xml" class="footer-top__social-icon-item" target="_blank">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1831_1610)">
<path d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z" fill="white" />
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0V0ZM10.7726 20.5425C10.4051 20.882 9.945 21.1048 9.45069 21.1825C8.95639 21.2602 8.45014 21.1894 7.99616 20.9789C7.54218 20.7685 7.16092 20.428 6.90073 20.0006C6.64054 19.5732 6.51316 19.0781 6.53472 18.5782C6.55629 18.0783 6.72584 17.5961 7.02187 17.1927C7.31791 16.7893 7.72708 16.4829 8.19749 16.3123C8.66791 16.1418 9.17838 16.1148 9.66415 16.2348C10.1499 16.3548 10.5891 16.6163 10.926 16.9863C11.3723 17.4806 11.6063 18.1305 11.5776 18.7958C11.5489 19.4611 11.2598 20.0885 10.7726 20.5425ZM17.5781 19.9014C17.5109 20.2678 17.315 20.5981 17.0257 20.8327C16.7364 21.0674 16.3728 21.1909 16.0004 21.1809C15.6281 21.171 15.2715 21.0283 14.9951 20.7786C14.7187 20.5289 14.5407 20.1886 14.4932 19.8192C14.4548 19.3644 14.4932 18.9096 14.4548 18.4493C14.4348 17.7485 14.2656 17.0601 13.9585 16.4299C13.6515 15.7996 13.2135 15.2421 12.674 14.7945C11.7614 14.0045 10.5933 13.5723 9.38631 13.5781C9.0137 13.5781 8.6411 13.5781 8.29042 13.5781C8.00963 13.5792 7.73363 13.5054 7.49089 13.3642C7.24816 13.2231 7.04747 13.0198 6.90955 12.7752C6.77162 12.5306 6.70145 12.2536 6.70628 11.9729C6.7111 11.6922 6.79075 11.4178 6.93699 11.1781C7.06429 10.9487 7.24988 10.7569 7.47502 10.6222C7.70015 10.4875 7.95686 10.4147 8.21918 10.411C9.40744 10.3463 10.5985 10.4702 11.748 10.7781C13.0809 11.1814 14.2894 11.9167 15.2603 12.9151C16.2866 13.9576 17.0117 15.2583 17.3589 16.6795C17.6253 17.7315 17.6996 18.823 17.5781 19.9014ZM22.8712 19.726C22.8655 20.0568 22.7456 20.3755 22.5319 20.6281C22.3183 20.8807 22.0239 21.0518 21.6986 21.1123C21.38 21.1754 21.0494 21.1263 20.7629 20.9736C20.4763 20.8208 20.2513 20.5736 20.126 20.274C20.0303 20.0337 19.9856 19.7762 19.9945 19.5178C20.0464 18.3912 19.9431 17.2629 19.6877 16.1644C19.1232 13.8255 17.7851 11.7459 15.8904 10.263C14.0018 8.7336 11.6467 7.89638 9.21644 7.89041H8.24658C7.97774 7.90291 7.71074 7.84016 7.4756 7.70922C7.24047 7.57828 7.04653 7.38435 6.91558 7.14921C6.78464 6.91408 6.72189 6.64708 6.73438 6.37824C6.74687 6.1094 6.83412 5.84937 6.98631 5.6274C7.00054 5.60335 7.01159 5.57757 7.01918 5.55068L7.32055 5.25479C7.71866 5.04331 8.17086 4.95554 8.61918 5.00274C10.1982 4.97924 11.7713 5.20106 13.2822 5.66027C15.5019 6.36314 17.5078 7.61585 19.1134 9.30194C20.719 10.988 21.8722 13.0528 22.4658 15.3041C22.8329 16.7475 22.9698 18.2399 22.8712 19.726Z" fill="#232323" />
</g>
<defs>
<clipPath id="clip0_1831_1610">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</a>
</div> </div>
</div>
<div class="footer-top__right">
<img src="https://kids.twreporter.org/wp-content/uploads/2022/10/footer_pic5.svg" class="footer-top__fig">
</div>
</div>
</div></div></div>
</div></div>
</div></article></div><footer class="ct-footer" data-id="type-1" itemscope="" itemtype="https://schema.org/WPFooter"><div data-row="middle" class="ct-hidden-lg"><div class="ct-container" data-columns-divider="md:sm"><div data-column="text:uD_c5a">
<div class="ct-header-text " data-id="uD_c5a" data-width="stretch">
<div class="entry-content">
<p><style>.footer-link-m {font-size:14px;color:#232323;padding:0 10px;}</style></p>
<p style="text-align: center;"><a class="footer-link-m" style="text-decoration: none;" href="https://www.twreporter.org/a/privacy-footer" target="_blank" rel="noopener"><strong>隱私政策</strong></a> <a class="footer-link-m" style="text-decoration: none;" href="https://www.twreporter.org/a/license-footer" target="_blank" rel="noopener"><strong>許可協議</strong></a></p>
<p>&nbsp;</p>
<p style="text-align: center;">公益勸募許可字號｜衛部救字第 1101363853 號</p>
<p style="text-align: center;"> Copyright © 2022 The Reporter</p> </div>
</div>
</div></div></div><div data-row="bottom" class="ct-hidden-sm ct-hidden-md"><div class="ct-container"><div data-column="text">
<div class="ct-header-text " data-id="text">
<div class="entry-content">
公益勸募許可字號｜衛部救字第 1101363853 號 <a href="https://www.twreporter.org/a/privacy-footer" target="_blank" class="footer-link"><strong>隱私政策</strong></a> <a href="https://www.twreporter.org/a/license-footer" target="_blank" class="footer-link"><strong>許可協議</strong></a> </div>
</div>
</div><div data-column="copyright">
<div class="ct-footer-copyright" data-id="copyright">
<p>Copyright © 2022 The Reporter</p></div>
</div></div></div></footer></div>
<script>requestAnimationFrame(() => document.body.classList.add( "stk--anim-init" ))</script><link rel='stylesheet' id='ugb-style-css-css' href='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks.css?ver=3.5.0' media='all' />
<style id='ugb-style-css-inline-css'>
:root {--stk-block-width-default-detected: 1440px;}
</style>
<link rel='stylesheet' id='ugb-style-css-premium-css' href='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks__premium_only.css?ver=3.5.0' media='all' />
<link rel='stylesheet' id='ugb-style-css-responsive-css' href='https://kids.twreporter.org/wp-content/plugins/stackable-ultimate-gutenberg-blocks-premium/dist/frontend_blocks_responsive.css?ver=3.5.0' media='all' />
<script id='ct-scripts-js-extra'>
var ct_localizations = {"ajax_url":"https:\\/\\/kids.twreporter.org\\/wp-admin\\/admin-ajax.php","nonce":"bac12605c2","public_url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/themes\\/blocksy\\/static\\/bundle\\/","rest_url":"https:\\/\\/kids.twreporter.org\\/wp-json\\/","search_url":"https:\\/\\/kids.twreporter.org\\/search\\/QUERY_STRING\\/","show_more_text":"\u986f\u793a\u66f4\u591a","more_text":"\u66f4\u591a","search_live_results":"\u641c\u5c0b\u7d50\u679c","search_live_no_result":"\u627e\u4e0d\u5230\u7b26\u5408\u7684","search_live_one_result":"\u60a8\u5df1\u627e\u5230 %s \u500b\u7b26\u5408\u7684. \u8acb\u6309 Tab \u9375\u4f86\u9078\u64c7\u5b83.","search_live_many_results":"\u60a8\u5df1\u627e\u5230 %s \u500b\u7b26\u5408\u7684. \u8acb\u6309 Tab \u9375\u4f86\u9078\u64c7\u5b83.","expand_submenu":"\u5c55\u958b\u4e0b\u62c9\u9078\u55ae","collapse_submenu":"\u6536\u5408\u4e0b\u62c9\u9078\u55ae","dynamic_js_chunks":[{"id":"blocksy_pro_micro_popups","selector":".ct-popup","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/framework\\/premium\\/static\\/bundle\\/micro-popups.js"},{"id":"blocksy_adv_cpt_read_progress","selector":".ct-read-progress-bar","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/framework\\/premium\\/extensions\\/post-types-extra\\/static\\/bundle\\/read-progress.js"},{"id":"blocksy_adv_cpt_filtering","selector":".ct-dynamic-filter a","trigger":"click","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/framework\\/premium\\/extensions\\/post-types-extra\\/static\\/bundle\\/filtering.js"},{"id":"blocksy_adv_cpt_filtering","selector":".ct-dynamic-filter, .ct-dynamic-filter + .entries","trigger":"hover","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/framework\\/premium\\/extensions\\/post-types-extra\\/static\\/bundle\\/filtering.js"},{"id":"blocksy_account","selector":".ct-header-account[href*=\\"account-modal\\"], .must-log-in a","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/static\\/bundle\\/account.js","trigger":"click","has_modal_loader":{"skip_if_no_template":true,"id":"account-modal"}},{"id":"blocksy_dark_mode","selector":"[data-id=\\"dark-mode-switcher\\"]","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/static\\/bundle\\/dark-mode.js","trigger":"click"},{"id":"blocksy_sticky_header","selector":"header [data-sticky]","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/static\\/bundle\\/sticky.js"}],"dynamic_styles":{"lazy_load":"https:\\/\\/kids.twreporter.org\\/wp-content\\/themes\\/blocksy\\/static\\/bundle\\/non-critical-styles.min.css","search_lazy":"https:\\/\\/kids.twreporter.org\\/wp-content\\/themes\\/blocksy\\/static\\/bundle\\/non-critical-search-styles.min.css"},"dynamic_styles_selectors":[{"selector":"#account-modal","url":"https:\\/\\/kids.twreporter.org\\/wp-content\\/plugins\\/blocksy-companion-pro\\/static\\/bundle\\/account-lazy.min.css"}]};
</script>
<script src='https://kids.twreporter.org/wp-content/themes/blocksy/static/bundle/main.js?ver=1.8.44' id='ct-scripts-js'></script>
<script src='https://kids.twreporter.org/wp-includes/js/comment-reply.min.js?ver=6.0.3' id='comment-reply-js'></script>
<script id='ugb-block-frontend-js-js-extra'>
var stackable = {"restUrl":"https:\/\/kids.twreporter.org\/wp-json\/","i18n":[]};
</script>
</body>
</html>
  `
  fs.writeFileSync(path.resolve(__dirname, './index.html'), html, {
    encoding: 'utf8',
  })
}

createIndexHtml(data)
