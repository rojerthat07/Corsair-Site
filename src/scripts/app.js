const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from("#rtx2080", .5, {
    x: -200,
    opacity: 0
});
tl.from("#rtx2080__info", 1, {
    x: -200,
    opacity: 0
});
tl2.from("#intelcore9", .5, {
    x: -200,
    opacity: 0
});
tl2.from("#intelcore9__info", 1, {
    x: -200,
    opacity: 0
});
tl3.from("#vengence", .5, {
    x: -200,
    opacity: 0
});
tl3.from("#vengence__info", 1, {
    x: -200,
    opacity: 0
});


const scene1 = new ScrollMagic.Scene({
        triggerElement: "#rtx2080"
    })
    .setTween(tl)
    .addTo(controller)
const scene2 = new ScrollMagic.Scene({
        triggerElement: "#intelcore9"
    })
    .setTween(tl2)
    .addTo(controller)
const scene3 = new ScrollMagic.Scene({
        triggerElement: "#vengence"
    })

    .setTween(tl3)
    .addTo(controller)




const abouttl = new TimelineMax();


abouttl.from(".about__heading", 1, {
    x: -200,
    opacity: 0
});
abouttl.from(".about__paragraph", 1, {
    y: 100,
    opacity: 0
});
abouttl.from(".about__rights", 1, {
    y: 100,
    opacity: 0
}, '-=1');
abouttl.from(".about__image", 1, {
    y: 100,
    opacity: 0
}, '-=1');

const aboutScene1 = new ScrollMagic.Scene({
        triggerElement: ".about__heading"
    })
    .setTween(abouttl)
    .addTo(controller)

const worthtl = new TimelineMax();


worthtl.from("#craftsmanship", .5, {
    y: 50,
    opacity: 0
});
worthtl.from("#performance", .5, {
    y: 50,
    opacity: 0
});
worthtl.from("#guaranteed", .5, {
    y: 50,
    opacity: 0
});


const worthScene1 = new ScrollMagic.Scene({
        triggerElement: "#worth-trigger"
    })
    .setTween(worthtl)
    .addTo(controller)








function cartExit(){
    document.getElementById("cart__section--container").style.display = 'none';
}

function cartOpen(){
    document.getElementById("cart__section--container").style.display = 'grid';
}