const sampleFlashCards = [
    {
        id: 1,
        front: <img src='/images/manzana.png' alt="Description" className="object-contain"/>,
        back: "manzana",
        flipped: false
    },
    {
        id: 2,
        front: <img src='/images/fracasar.png' alt="Description" className="object-fit"/>,
        back: "fracasar",
        flipped: false
    },
    {
        id: 3,
        front: <img src='/images/obtener.png' alt="Description" className="object-fit"/>,
        back: "obtener",
        flipped: false
    },
    {
      id: 3,
      front: <img src='/images/acabado.png' alt="Description" className="object-fit"/>,
      back: "acabar",
      flipped: false
  },
    {
        id: 4,
        front: <img src='/images/alaridos.png' alt="Description" className="object-fit"/>,
        back: "alaridos",
        flipped: false
  }
    ,
    {
        id: 5,
        front: <img src='/images/bromas.png' alt="Description" className="object-fit"/>,
        back: "bromas",
        flipped: false
    },
    {
        id: 6,
        front: <img src='/images/caer.png' alt="Description" className="object-fit"/>,
        back: "caer",
        flipped: false
    },
    {
        id: 7,
        front: <img src='/images/castigar.png' alt="Description" className="object-fit"/>,
        back: "castigar",
        flipped: false
    },
    {
        id: 8,
        front: <img src='/images/desastre.png' alt="Description" className="object-fit"/>,
        back: "desastre",
        flipped: false
    },
    {
        id: 9,
        front: <img src='/images/doler.png' alt="Description" className="object-fit"/>,
        back: "doler",
        flipped: false
    },
    {
        id: 10,
        front: <img src='/images/enojado.png' alt="Description" className="object-fit"/>,
        back: "enojado",
        flipped: false
    },
    {
        id: 11,
        front: <img src='/images/enseguida.png' alt="Description" className="object-fit"/>,
        back: "enseguida",
        flipped: false
    },
    {
        id: 12,
        front: <img src='/images/grito.png' alt="Description" className="object-fit"/>,
        back: "gritó",
        flipped: false
    },
    {
        id: 13,
        front: <img src='/images/seca.png' alt="Description" className="object-fit"/>,
        back: "la boca seca",
        flipped: false
    },
    {
        id: 14,
        front: <img src='/images/lechuza.png' alt="Description" className="object-fit"/>,
        back: "lechuza",
        flipped: false
    },
    {
        id: 15,
        front: <img src='/images/matar.png' alt="Description" className="object-fit"/>,
        back: "matar",
        flipped: false
    },
    {
        id: 16,
        front: <img src='/images/mentiras.png' alt="Description" className="object-fit"/>,
        back: "mentiras",
        flipped: false
    },
    {
        id: 17,
        front: <img src='/images/pajaros.png' alt="Description" className="object-fit"/>,
        back: "pájaros",
        flipped: false
    },
    {
        id: 18,
        front: <img src='/images/poer.png' alt="Description" className="object-fit"/>,
        back: "poer",
        flipped: false
    },
    {
        id: 19,
        front: <img src='/images/prometio.png' alt="Description" className="object-fit"/>,
        back: "prometer",
        flipped: false
    },
    {
        id: 20,
        front: <img src='/images/ruborizando.png' alt="Description" className="object-fit"/>,
        back: "rubor",
        flipped: false
    },
    {
        id: 21,
        front: <img src='/images/ruego.png' alt="Description" className="object-fit"/>,
        back: "rogar",
        flipped: false
    },
    {
        id: 22,
        front: <img src='/images/suelo.png' alt="Description" className="object-fit"/>,
        back: "suelo",
        flipped: false
    },
    {
        id: 23,
        front: <img src='/images/temblar.png' alt="Description" className="object-fit"/>,
        back: "temblar",
        flipped: false
    },
    {
        id: 24,
        front: <img src='/images/trapero.png' alt="Description" className="object-fit"/>,
        back: "trapero",
        flipped: false
    },
    {
        id: 25,
        front: <img src='/images/triunfo.png' alt="Description" className="object-fit"/>,
        back: "triunfo",
        flipped: false
    },
    {
        id: 26,
        front: <img src='/images/acarrear.png' alt="Description" className="object-fit"/>,
        back: "acarrear",
        flipped: false
    },
    {
        id: 27,
        front: <img src='/images/aguejero.png' alt="Description" className="object-fit"/>,
        back: "aguejero",
        flipped: false
    },
    {
        id: 28,
        front: <img src='/images/blandir.png' alt="Description" className="object-fit"/>,
        back: "blandir",
        flipped: false
    },
    {
        id: 29,
        front: <img src='/images/buldog.png' alt="Description" className="object-fit"/>,
        back: "buldog",
        flipped: false
    },
    {
        id: 30,
        front: <img src='/images/cantidad.png' alt="Description" className="object-fit"/>,
        back: "cantidad",
        flipped: false
    }, 
    {
      id: 31,
      front: <img src='/images/coger.png' alt="Description" className="object-fit"/>,
      back: "coger",
      flipped: false
    }
    ,
    {
      id: 32,
      front: <img src='/images/duro.png' alt="Description" className="object-fit"/>,
      back: "duro",
      flipped: false
    }
    ,
    {
      id: 33,
      front: <img src='/images/encerrar.png' alt="Description" className="object-fit"/>,
      back: "encerrar",
      flipped: false
    }
    ,
    {
      id: 34,
      front: <img src='/images/menoresdeedad.png' alt="Description" className="object-fit"/>,
      back: "menores de edad",
      flipped: false
    }
    ,
    {
      id: 35,
      front: <img src='/images/planeador.png' alt="Description" className="object-fit"/>,
      back: "planeador",
      flipped: false
    }
    ,
    {
      id: 36,
      front: <img src='/images/reirse.png' alt="Description" className="object-fit"/>,
      back: "reírse",
      flipped: false
    }
    ,
    {
      id: 37,
      front: <img src='/images/reja.png' alt="Description" className="object-fit"/>,
      back: "reja",
      flipped: false
    }
    ,
    {
      id: 38,
      front: <img src='/images/riesgo.png' alt="Description" className="object-fit"/>,
      back: "reisgo",
      flipped: false
    }
    ,
    {
      id: 39,
      front: <img src='/images/vista.png' alt="Description" className="object-fit"/>,
      back: "vista",
      flipped: false
    }
    ,
    {
      id: 40,
      front: <img src='/images/apiadado.png' alt="Description" className="object-fit"/>,
      back: "apiadado",
      flipped: false
    }
    ,
    {
      id: 41,
      front: <img src='/images/asco.png' alt="Description" className="object-fit"/>,
      back: "asco",
      flipped: false
    }
    ,
    {
      id: 42,
      front: <img src='/images/barrote.png' alt="Description" className="object-fit"/>,
      back: "barrote",
      flipped: false
    }
    ,
    {
      id: 43,
      front: <img src='/images/basta.png' alt="Description" className="object-fit"/>,
      back: "basta",
      flipped: false
    }
    ,
    {
      id: 44,
      front: <img src='/images/cara.png' alt="Description" className="object-fit"/>,
      back: "cara",
      flipped: false
    }
    ,
    {
      id: 45,
      front: <img src='/images/cerebro.png' alt="Description" className="object-fit"/>,
      back: "cerebro",
      flipped: false
    }
    ,
    {
      id: 46,
      front: <img src='/images/cuenco.png' alt="Description" className="object-fit"/>,
      back: "cuenco",
      flipped: false
    }
    ,
    {
      id: 47,
      front: <img src='/images/dejar.png' alt="Description" className="object-fit"/>,
      back: "dejar",
      flipped: false
    }
    ,
    {
      id: 48,
      front: <img src='/images/echar.png' alt="Description" className="object-fit"/>,
      back: "echar",
      flipped: false
    }
    ,
    {
      id: 49,
      front: <img src='/images/empapar.png' alt="Description" className="object-fit"/>,
      back: "empapar",
      flipped: false
    }
    ,
    {
      id: 50,
      front: <img src='/images/entriste.png' alt="Description" className="object-fit"/>,
      back: "entriste",
      flipped: false
    }
    ,
    {
      id: 51,
      front: <img src='/images/inanicion.png' alt="Description" className="object-fit"/>,
      back: "inanción",
      flipped: false
    }
    ,
    {
      id: 52,
      front: <img src='/images/jaula.png' alt="Description" className="object-fit"/>,
      back: "jaula",
      flipped: false
    }
    ,
    {
      id: 53,
      front: <img src='/images/manera.png' alt="Description" className="object-fit"/>,
      back: "manera",
      flipped: false
    }
    ,
    {
      id: 54,
      front: <img src='/images/morir.png' alt="Description" className="object-fit"/>,
      back: "morir",
      flipped: false
    }
    ,
    {
      id: 55,
      front: <img src='/images/peca.png' alt="Description" className="object-fit"/>,
      back: "peca",
      flipped: false
    }
    ,
    {
      id: 56,
      front: <img src='/images/oscura.png' alt="Description" className="object-fit"/>,
      back: "oscura",
      flipped: false
    }
    ,
    {
      id: 57,
      front: <img src='/images/maleta.png' alt="Description" className="object-fit"/>,
      back: "maleta",
      flipped: false
    }
    ,
    {
      id: 58,
      front: <img src='/images/murcielago.png' alt="Description" className="object-fit"/>,
      back: "murciélago",
      flipped: false
    }
    ,
    {
      id: 59,
      front: <img src='/images/penosa.png' alt="Description" className="object-fit"/>,
      back: "penosa",
      flipped: false
    }
    ,
    {
      id: 60,
      front: <img src='/images/plomeros.png' alt="Description" className="object-fit"/>,
      back: "plomeros",
      flipped: false
    }
    ,
    {
      id: 61,
      front: <img src='/images/pluma.png' alt="Description" className="object-fit"/>,
      back: "pluma",
      flipped: false
    }
    ,
    {
      id: 62,
      front: <img src='/images/rugir.png' alt="Description" className="object-fit"/>,
      back: "rugir",
      flipped: false
    }
    ,
    {
      id: 63,
      front: <img src='/images/salto.png' alt="Description" className="object-fit"/>,
      back: "salto",
      flipped: false
    }
    ,
    {
      id: 64,
      front: <img src='/images/salvador.png' alt="Description" className="object-fit"/>,
      back: "salvador",
      flipped: false
    }
    ,
    {
      id: 65,
      front: <img src='/images/servir.png' alt="Description" className="object-fit"/>,
      back: "servir",
      flipped: false
    }
    ,
    {
      id: 66,
      front: <img src='/images/suceso.png' alt="Description" className="object-fit"/>,
      back: "suceso",
      flipped: false
    }
    ,
    {
      id: 67,
      front: <img src='/images/tripas.png' alt="Description" className="object-fit"/>,
      back: "tripas",
      flipped: false
    }
    ,
    {
      id: 68,
      front: <img src='/images/tumbado.png' alt="Description" className="object-fit"/>,
      back: "tumbado",
      flipped: false
    }
  ];
  
  export default sampleFlashCards;