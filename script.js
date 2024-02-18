// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

/*
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Branded Collection `<i class='fa-brands fa-shopify'></i>`","Both Gender Category `<i class='fa-brands fa-shopify'></i>`","Online Boot Store `<i class='fa-brands fa-shopify'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
*/
