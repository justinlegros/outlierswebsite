import fullpage from './fullpage';

new fullpage('#fullpage', {
    anchors: ['home','artists','merch','tour'],
    autoScrolling:true,
    scrollHorizontally: true,
    menu: '#menu',
    verticalCentered: true,
    fixedElements: ['.socials', '#header','#menu']

});
fullpage_api.setAllowScrolling(true);