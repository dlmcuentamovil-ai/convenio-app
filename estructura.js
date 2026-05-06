/* ============================================================
   ESTRUCTURA COMPLETA DEL MENÚ (18 categorías + sub + sub-sub)
   Archivo separado — Compatible con Vercel
   Expuesto en window.ESTRUCTURA
=========================================================== */

window.ESTRUCTURA = {

  jornada: {
    titulo: "Jornada",
    icono: "🕒",
    sub: {
      tt: {
        titulo: "Jornada Completa",
        sub: {
          calculo: { titulo: "Cálculo" },
          casos: { titulo: "Casos especiales" },
          tabla: { titulo: "Tabla" }
        }
      },
      sdf: {
        titulo: "Jornada SDF",
        sub: {
          calculo: { titulo: "Cálculo" },
          tabla: { titulo: "Tabla" }
        }
      },
      nocturno: {
        titulo: "Turno nocturno",
        sub: {
          requisitos: { titulo: "Requisitos" },
          compensacion: { titulo: "Compensación" }
        }
      },
      requisitos: { titulo: "Requisitos turno voluntario" },
      anual: { titulo: "Jornada anual" },
      irregular: { titulo: "Distribución irregular" },
      cambios: { titulo: "Cambios de turno" },
      efectivas: { titulo: "Horas efectivas" },
      bocadillo: { titulo: "Bocadillo" },
      complementarias: { titulo: "Horas complementarias" }
    }
  },

  vacaciones: {
    titulo: "Vacaciones",
    icono: "🏖️",
    sub: {
      tt: { titulo: "Vacaciones TT" },
      sdf: { titulo: "Vacaciones SDF" },
      computo: { titulo: "Cómputo" },
      devengo: { titulo: "Devengo" },
      disfrute: { titulo: "Disfrute" },
      calendario: { titulo: "Calendario anual" },
      antiguedad: { titulo: "Vacaciones por antigüedad" }
    }
  },

  permisos: {
    titulo: "Permisos",
    icono: "📄",
    sub: {
      retribuidos: { titulo: "Permisos retribuidos" },
      noretribuidos: { titulo: "Permisos no retribuidos" },
      hospitalizacion: { titulo: "Hospitalización" },
      fallecimiento: { titulo: "Fallecimiento" },
      nacimiento: { titulo: "Nacimiento" },
      acompanamiento: { titulo: "Acompañamiento médico" },
      deber: { titulo: "Deber inexcusable" }
    }
  },

  pluses: {
    titulo: "Pluses",
    icono: "💰",
    sub: {
      transporte: { titulo: "Plus transporte" },
      nocturnidad: {
        titulo: "Plus nocturnidad",
        sub: {
          calculo: { titulo: "Cálculo" },
          tabla: { titulo: "Tabla" },
          casos: { titulo: "Casos especiales" }
        }
      },
      tpp: { titulo: "Plus tóxico/penoso/peligroso" },
      turnicidad: { titulo: "Plus turnicidad" },
      productividad: { titulo: "Plus productividad" },
      calidad: { titulo: "Plus calidad" },
      incentivos: { titulo: "Incentivos" },
      prima: { titulo: "Prima compensatoria" },
      dietas: { titulo: "Dietas" },
      peonA: { titulo: "Peón A" },
      funcional: { titulo: "Plus funcional" }
    }
  },

  descansos: {
    titulo: "Descansos",
    icono: "⏸️",
    sub: {
      semanal: { titulo: "Descanso semanal" },
      libranzas: { titulo: "Libranzas" },
      cambios: { titulo: "Cambios de turno" },
      diario: { titulo: "Descanso diario" },
      entrejornadas: { titulo: "Descanso entre jornadas" },
      festivos: { titulo: "Descanso en festivos" },
      horas: { titulo: "Horas mensuales" }
    }
  },

  antiguedad: {
    titulo: "Antigüedad",
    icono: "📆",
    sub: {
      bienios: { titulo: "Bienios" },
      quinquenios: { titulo: "Quinquenios" },
      computo: { titulo: "Cómputo" },
      devengo: { titulo: "Devengo" },
      abono: { titulo: "Abono" },
      casos: { titulo: "Casos especiales" }
    }
  },

  pagas: {
    titulo: "Pagas Extra",
    icono: "🎁",
    sub: {
      verano: { titulo: "Paga de verano" },
      navidad: { titulo: "Paga de navidad" },
      calculo: { titulo: "Cálculo" },
      devengo: { titulo: "Devengo" },
      casos: { titulo: "Casos especiales" }
    }
  },

  economia: {
    titulo: "Condiciones Económicas",
    icono: "💵",
    sub: {
      tablas: { titulo: "Tablas salariales" },
      incrementos: { titulo: "Incrementos" },
      complementos: { titulo: "Complementos" },
      salario: { titulo: "Salario base" },
      variable: { titulo: "Retribución variable" },
      actualizacion: { titulo: "Actualización anual" }
    }
  },

  excedencias: {
    titulo: "Excedencias",
    icono: "🚪",
    sub: {
      voluntaria: { titulo: "Excedencia voluntaria" },
      familiar: { titulo: "Cuidado familiar" },
      especial: { titulo: "Excedencia especial" },
      reserva: { titulo: "Reserva de puesto" },
      reingreso: { titulo: "Reingreso" }
    }
  },

  conductores: {
    titulo: "Conductores",
    icono: "🚚",
    sub: {
      categorias: { titulo: "Categorías" },
      funciones: { titulo: "Funciones" },
      plus: { titulo: "Plus conducción" },
      responsabilidades: { titulo: "Responsabilidades" },
      formacion: { titulo: "Formación" }
    }
  },

  ascensos: {
    titulo: "Ascensos",
    icono: "📈",
    sub: {
      procedimiento: { titulo: "Procedimiento" },
      requisitos: { titulo: "Requisitos" },
      vacantes: { titulo: "Vacantes" },
      meritos: { titulo: "Méritos" },
      pruebas: { titulo: "Pruebas" }
    }
  },

  contratacion: {
    titulo: "Contratación",
    icono: "📝",
    sub: {
      tipos: { titulo: "Tipos de contrato" },
      prueba: { titulo: "Período de prueba" },
      indefinido: { titulo: "Conversión a indefinido" },
      relevo: { titulo: "Contrato relevo" },
      temporales: { titulo: "Contratos temporales" }
    }
  },

  vacantes: {
    titulo: "Plazas Vacantes",
    icono: "📌",
    sub: {
      procedimiento: { titulo: "Procedimiento" },
      publicacion: { titulo: "Publicación" },
      solicitud: { titulo: "Solicitud" },
      adjudicacion: { titulo: "Adjudicación" }
    }
  },

  prendas: {
    titulo: "Prendas de Trabajo",
    icono: "👕",
    sub: {
      dotacion: { titulo: "Dotación anual" },
      reposicion: { titulo: "Reposición" },
      epis: { titulo: "EPIs" },
      temporadas: { titulo: "Temporadas" },
      normativa: { titulo: "Normativa" }
    }
  },

  mejoras: {
    titulo: "Mejoras Sociales",
    icono: "❤️",
    sub: {
      seguro: { titulo: "Seguro" },
      ayudas: { titulo: "Ayudas" },
      formacion: { titulo: "Formación" },
      conciliacion: { titulo: "Conciliación" },
      transporte: { titulo: "Transporte" }
    }
  },

  jubilacion: {
    titulo: "Jubilación",
    icono: "🎂",
    sub: {
      parcial: { titulo: "Jubilación parcial" },
      anticipada: { titulo: "Jubilación anticipada" },
      relevo: { titulo: "Contrato relevo" },
      incentivos: { titulo: "Incentivos" }
    }
  },

  seguridad: {
    titulo: "Seguridad y Salud",
    icono: "⚠️",
    sub: {
      epis: { titulo: "EPIs" },
      riesgos: { titulo: "Riesgos laborales" },
      formacion: { titulo: "Formación" },
      reconocimientos: { titulo: "Reconocimientos médicos" },
      protocolos: { titulo: "Protocolos" }
    }
  },

  adicionales: {
    titulo: "Disposiciones Adicionales",
    icono: "📚",
    sub: {
      da1: { titulo: "DA 1" },
      da2: { titulo: "DA 2" },
      da3: { titulo: "DA 3" },
      da4: { titulo: "DA 4" },
      da5: { titulo: "DA 5" }
    }
  }

};