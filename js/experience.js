import * as THREE from "three";

import {
    OrbitControls
} from "three/addons/controls/OrbitControls.js";



/* =========================================
   DATA KATALOG
========================================= */

const catalogData = {

    book: {

        number: "01",

        title: "Cetak",

        titleSecond: "Buku.",

        category: "CETAK & PERCETAKAN",

        description:
            "Cetak buku hardcover, softcover, buku Yasin, dan berbagai kebutuhan dokumen.",

        features: [
            "Hardcover",
            "Softcover",
            "Buku Yasin"
        ],

        whatsapp:
            "Halo Kartini Copy Center, saya ingin bertanya tentang cetak buku."

    },


    spiral: {

        number: "02",

        title: "Jilid",

        titleSecond: "Spiral.",

        category: "JILID & FINISHING",

        description:
            "Jilid spiral untuk laporan, tugas, proposal, dokumen dan berbagai kebutuhan lainnya.",

        features: [
            "Jilid Spiral",
            "Laporan",
            "Proposal"
        ],

        whatsapp:
            "Halo Kartini Copy Center, saya ingin bertanya tentang jilid spiral."

    },


    banner: {

        number: "03",

        title: "Banner &",

        titleSecond: "Spanduk.",

        category: "MEDIA PROMOSI",

        description:
            "Cetak banner dan spanduk untuk promosi usaha, event, acara, informasi dan kebutuhan visual.",

        features: [
            "Banner",
            "Spanduk",
            "Media Promosi"
        ],

        whatsapp:
            "Halo Kartini Copy Center, saya ingin bertanya tentang cetak banner dan spanduk."

    },


    stamp: {

        number: "04",

        title: "Buat",

        titleSecond: "Stempel.",

        category: "CETAK & IDENTITAS",

        description:
            "Pembuatan stempel untuk usaha, kantor, organisasi dan berbagai kebutuhan administrasi.",

        features: [
            "Stempel Usaha",
            "Stempel Kantor",
            "Administrasi"
        ],

        whatsapp:
            "Halo Kartini Copy Center, saya ingin bertanya tentang pembuatan stempel."

    }

};



/* =========================================
   DOM
========================================= */

const canvasContainer =
    document.getElementById(
        "interactive-canvas"
    );


const buttons =
    document.querySelectorAll(
        ".catalog-item"
    );


const title =
    document.getElementById(
        "catalog-title"
    );


const description =
    document.getElementById(
        "catalog-description"
    );


const whatsapp =
    document.getElementById(
        "catalog-whatsapp"
    );


const counter =
    document.querySelector(
        ".object-counter"
    );


const category =
    document.querySelector(
        ".catalog-category"
    );


const featureContainer =
    document.querySelector(
        ".catalog-features"
    );



/* =========================================
   THREE SETUP
========================================= */

const scene =
    new THREE.Scene();


scene.background =
    new THREE.Color(
        0xd8d4cb
    );


const camera =
    new THREE.PerspectiveCamera(
        38,
        canvasContainer.clientWidth /
        canvasContainer.clientHeight,
        .1,
        100
    );


camera.position.set(
    4,
    2.8,
    7
);


const renderer =
    new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });


renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);


renderer.setSize(
    canvasContainer.clientWidth,
    canvasContainer.clientHeight
);


renderer.shadowMap.enabled =
    true;


renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


renderer.outputColorSpace =
    THREE.SRGBColorSpace;


renderer.toneMapping =
    THREE.ACESFilmicToneMapping;


renderer.toneMappingExposure =
    1.15;


canvasContainer.appendChild(
    renderer.domElement
);



/* =========================================
   LIGHTS
========================================= */

const ambient =
    new THREE.HemisphereLight(
        0xffffff,
        0x777777,
        2.5
    );


scene.add(
    ambient
);


const keyLight =
    new THREE.DirectionalLight(
        0xffffff,
        4
    );


keyLight.position.set(
    4,
    7,
    5
);


keyLight.castShadow =
    true;


keyLight.shadow.mapSize.width =
    2048;


keyLight.shadow.mapSize.height =
    2048;


scene.add(
    keyLight
);


const rimLight =
    new THREE.PointLight(
        0xffffff,
        18,
        15
    );


rimLight.position.set(
    -4,
    3,
    -3
);


scene.add(
    rimLight
);



/* =========================================
   FLOOR
========================================= */

const floor =
    new THREE.Mesh(

        new THREE.CircleGeometry(
            5,
            64
        ),

        new THREE.MeshStandardMaterial({
            color: 0xc4c0b7,
            roughness: 1
        })

    );


floor.rotation.x =
    -Math.PI / 2;


floor.position.y =
    -1.5;


floor.receiveShadow =
    true;


scene.add(
    floor
);



/* =========================================
   CONTROLS
========================================= */

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );


controls.enableDamping =
    true;


controls.enablePan =
    false;


controls.minDistance =
    4;


controls.maxDistance =
    9;


controls.minPolarAngle =
    Math.PI * .3;


controls.maxPolarAngle =
    Math.PI * .65;


controls.target.set(
    0,
    0,
    0
);



/* =========================================
   MATERIAL HELPER
========================================= */

function mat(
    color,
    roughness = .6,
    metalness = 0
) {

    return new THREE.MeshStandardMaterial({

        color,

        roughness,

        metalness

    });

}



/* =========================================
   BOOK
========================================= */

function createBook() {

    const group =
        new THREE.Group();


    const pages =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3,
                4.2,
                .6
            ),

            mat(
                0xe9e5dc,
                .9
            )

        );


    pages.castShadow =
        true;


    group.add(
        pages
    );


    const coverMaterial =
        mat(
            0x202020,
            .4
        );


    const front =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3.15,
                4.35,
                .14
            ),

            coverMaterial

        );


    front.position.z =
        .4;


    front.castShadow =
        true;


    group.add(
        front
    );


    const back =
        front.clone();


    back.position.z =
        -.4;


    group.add(
        back
    );


    const spine =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                .18,
                4.35,
                .8
            ),

            coverMaterial

        );


    spine.position.x =
        -1.58;


    group.add(
        spine
    );


    const label =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                1.8,
                .9,
                .03
            ),

            mat(
                0xd9d5cc,
                .8
            )

        );


    label.position.set(
        0,
        .5,
        .48
    );


    group.add(
        label
    );


    group.rotation.x =
        -.12;


    group.rotation.y =
        -.45;


    return group;

}



/* =========================================
   SPIRAL
========================================= */

function createSpiral() {

    const group =
        new THREE.Group();


    const cover =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3.2,
                4.4,
                .12
            ),

            mat(
                0x242424,
                .5
            )

        );


    cover.castShadow =
        true;


    group.add(
        cover
    );


    const pages =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3,
                4.2,
                .5
            ),

            mat(
                0xf0ede5,
                .85
            )

        );


    pages.position.z =
        .3;


    pages.castShadow =
        true;


    group.add(
        pages
    );


    const ringMaterial =
        mat(
            0x333333,
            .3,
            .7
        );


    for (
        let i = 0;
        i < 9;
        i++
    ) {

        const y =
            -1.8 +
            i * .45;


        const curve =
            new THREE.CatmullRomCurve3([

                new THREE.Vector3(
                    -1.8,
                    y,
                    .55
                ),

                new THREE.Vector3(
                    -2.05,
                    y,
                    .7
                ),

                new THREE.Vector3(
                    -2.05,
                    y,
                    .15
                ),

                new THREE.Vector3(
                    -1.8,
                    y,
                    .02
                )

            ]);


        const geometry =
            new THREE.TubeGeometry(
                curve,
                20,
                .055,
                8,
                false
            );


        const ring =
            new THREE.Mesh(
                geometry,
                ringMaterial
            );


        ring.castShadow =
            true;


        group.add(
            ring
        );

    }


    group.rotation.y =
        .3;


    return group;

}



/* =========================================
   BANNER
========================================= */

function createBanner() {

    const group =
        new THREE.Group();


    const cloth =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                5.4,
                2.4,
                .08
            ),

            mat(
                0x262626,
                .8
            )

        );


    cloth.castShadow =
        true;


    group.add(
        cloth
    );


    const poleMaterial =
        mat(
            0x444444,
            .3,
            .8
        );


    const poleGeometry =
        new THREE.CylinderGeometry(
            .06,
            .06,
            3.4,
            16
        );


    const left =
        new THREE.Mesh(
            poleGeometry,
            poleMaterial
        );


    left.position.set(
        -2.75,
        -.4,
        0
    );


    group.add(
        left
    );


    const right =
        left.clone();


    right.position.x =
        2.75;


    group.add(
        right
    );


    const rod =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                .045,
                .045,
                5.7,
                16
            ),

            poleMaterial

        );


    rod.rotation.z =
        Math.PI / 2;


    rod.position.y =
        1.2;


    group.add(
        rod
    );


    group.rotation.y =
        -.3;


    return group;

}



/* =========================================
   STAMP
========================================= */

function createStamp() {

    const group =
        new THREE.Group();


    const black =
        mat(
            0x222222,
            .35
        );


    const handle =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                .45,
                .55,
                2.7,
                32
            ),

            black

        );


    handle.position.y =
        .9;


    handle.castShadow =
        true;


    group.add(
        handle
    );


    const head =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                1.6,
                .75,
                1.2
            ),

            black

        );


    head.position.y =
        -.7;


    head.castShadow =
        true;


    group.add(
        head
    );


    const face =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                .5,
                .5,
                .08,
                48
            ),

            mat(
                0x555555,
                .7
            )

        );


    face.rotation.x =
        Math.PI / 2;


    face.position.y =
        -1.1;


    group.add(
        face
    );


    return group;

}



/* =========================================
   OBJECT FACTORY
========================================= */

function createObject(
    type
) {

    if (
        type === "book"
    ) {

        return createBook();

    }


    if (
        type === "spiral"
    ) {

        return createSpiral();

    }


    if (
        type === "banner"
    ) {

        return createBanner();

    }


    if (
        type === "stamp"
    ) {

        return createStamp();

    }

}



/* =========================================
   CURRENT OBJECT
========================================= */

let currentObject =
    createBook();


scene.add(
    currentObject
);


let currentType =
    "book";


let transition =
    false;



/* =========================================
   CHANGE CATALOG
========================================= */

function changeCatalog(
    type
) {

    if (
        type === currentType ||
        transition
    ) {

        return;

    }


    transition =
        true;


    const data =
        catalogData[type];


    /* BUTTON */

    buttons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.type === type
            );

        }
    );


    /* TEXT */

    category.textContent =
        data.category;


    title.innerHTML =

        `${data.title}
        <span>
            ${data.titleSecond}
        </span>`;


    description.textContent =
        data.description;


    /* FEATURES */

    featureContainer.innerHTML =
        data.features.map(
            (feature, index) => `

                <div>

                    <span>
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                        ${feature}
                    </p>

                </div>

            `
        ).join("");


    /* WHATSAPP */

    whatsapp.href =
        `https://wa.me/6281155555379?text=${encodeURIComponent(
            data.whatsapp
        )}`;


    /* COUNTER */

    counter.innerHTML =
        `${data.number}
        <span>/ 04</span>`;


    /* REMOVE OLD */

    const oldObject =
        currentObject;


    scene.remove(
        oldObject
    );


    /* NEW */

    const newObject =
        createObject(
            type
        );


    newObject.scale.set(
        .01,
        .01,
        .01
    );


    scene.add(
        newObject
    );


    currentObject =
        newObject;


    currentType =
        type;


    /* entrance animation */

    let progress =
        0;


    function animateEntrance() {

        progress +=
            .055;


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        newObject.scale.set(
            eased,
            eased,
            eased
        );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                animateEntrance
            );

        } else {

            transition =
                false;

        }

    }


    animateEntrance();

}



/* =========================================
   BUTTON EVENTS
========================================= */

buttons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                changeCatalog(
                    button.dataset.type
                );

            }
        );

    }
);



/* =========================================
   ANIMATION
========================================= */

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(
        animate
    );


    const time =
        clock.getElapsedTime();


    if (
        currentObject
    ) {

        currentObject.position.y =
            Math.sin(
                time * 1.3
            ) * .13;


        if (
            !transition
        ) {

            currentObject.rotation.y +=
                .0015;

        }

    }


    controls.update();


    renderer.render(
        scene,
        camera
    );

}


animate();



/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            canvasContainer.clientWidth /
            canvasContainer.clientHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            canvasContainer.clientWidth,
            canvasContainer.clientHeight
        );

    }
);