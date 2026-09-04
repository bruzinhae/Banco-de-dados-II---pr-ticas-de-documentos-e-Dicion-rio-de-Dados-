// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('controle_frequencia_v1');

// Create a new document in the collection.
db.getCollection('disciplinas').insertMany(
    [
  {
    "codigo": "12490-P",
    "nome": "Estudos de Bancos de Dados 2 - Prática",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 29,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 1,
        "docente": {
          "RP": "4567890",
          "nome": "Steve Jobs"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-01T08:00:00",
            "dataHoraFim": "2026-08-01T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-07T08:00:00",
            "dataHoraFim": "2026-08-07T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      },
      {
        "codigo": "0102",
        "qtdeInicialDeMatriculados": 40,
        "qtdeAtualDeMatriculados": 40,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "890392",
          "nome": "Ada Lovelace"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-02T10:00:00",
            "dataHoraFim": "2026-08-02T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-08T10:00:00",
            "dataHoraFim": "2026-08-08T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12491-P",
    "nome": "Defesa Contra as Artes das Trevas",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "112233",
          "nome": "Tony Stark"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-01T08:00:00",
            "dataHoraFim": "2026-08-01T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-07T08:00:00",
            "dataHoraFim": "2026-08-07T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12492-P",
    "nome": "Poções",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "223344",
          "nome": "Indiana Jones"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-02T08:00:00",
            "dataHoraFim": "2026-08-02T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-09T08:00:00",
            "dataHoraFim": "2026-08-09T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12493-P",
    "nome": "Herbologia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "334455",
          "nome": "Ellen Ripley"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-03T08:00:00",
            "dataHoraFim": "2026-08-03T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-10T08:00:00",
            "dataHoraFim": "2026-08-10T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12494-P",
    "nome": "Transfiguração",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "445566",
          "nome": "Jack Sparrow"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-04T08:00:00",
            "dataHoraFim": "2026-08-04T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-11T08:00:00",
            "dataHoraFim": "2026-08-11T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12495-P",
    "nome": "Feitiços",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "556677",
          "nome": "Hermione Granger"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-05T08:00:00",
            "dataHoraFim": "2026-08-05T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-12T08:00:00",
            "dataHoraFim": "2026-08-12T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12496-P",
    "nome": "Trato das Criaturas Mágicas",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "667788",
          "nome": "Forrest Gump"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-06T08:00:00",
            "dataHoraFim": "2026-08-06T09:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-13T08:00:00",
            "dataHoraFim": "2026-08-13T09:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12497-P",
    "nome": "Astronomia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "778899",
          "nome": "Neo Anderson"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-01T10:00:00",
            "dataHoraFim": "2026-08-01T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-08T10:00:00",
            "dataHoraFim": "2026-08-08T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12498-P",
    "nome": "Aritmancia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "889900",
          "nome": "Rocky Balboa"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-02T10:00:00",
            "dataHoraFim": "2026-08-02T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-09T10:00:00",
            "dataHoraFim": "2026-08-09T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12499-P",
    "nome": "Estudo das Runas Antigas",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "990011",
          "nome": "Vito Corleone"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-03T10:00:00",
            "dataHoraFim": "2026-08-03T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-10T10:00:00",
            "dataHoraFim": "2026-08-10T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12500-P",
    "nome": "Adivinhação",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "101202",
          "nome": "Sarah Connor"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-04T10:00:00",
            "dataHoraFim": "2026-08-04T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-11T10:00:00",
            "dataHoraFim": "2026-08-11T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12501-P",
    "nome": "Voo",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "202303",
          "nome": "James Bond"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-05T10:00:00",
            "dataHoraFim": "2026-08-05T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-12T10:00:00",
            "dataHoraFim": "2026-08-12T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12502-P",
    "nome": "História da Magia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "303404",
          "nome": "Marty McFly"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-06T10:00:00",
            "dataHoraFim": "2026-08-06T11:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-13T10:00:00",
            "dataHoraFim": "2026-08-13T11:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12503-P",
    "nome": "Estudo dos Trouxas",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "404505",
          "nome": "Han Solo"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-01T13:00:00",
            "dataHoraFim": "2026-08-01T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-08T13:00:00",
            "dataHoraFim": "2026-08-08T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12504-P",
    "nome": "Duelo",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "505606",
          "nome": "Bruce Wayne"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-02T13:00:00",
            "dataHoraFim": "2026-08-02T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-09T13:00:00",
            "dataHoraFim": "2026-08-09T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12505-P",
    "nome": "Alquimia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "606707",
          "nome": "Clarice Starling"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-03T13:00:00",
            "dataHoraFim": "2026-08-03T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-10T13:00:00",
            "dataHoraFim": "2026-08-10T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12506-P",
    "nome": "Aparatação",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "707808",
          "nome": "Maximus Decimus"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-04T13:00:00",
            "dataHoraFim": "2026-08-04T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-11T13:00:00",
            "dataHoraFim": "2026-08-11T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12507-P",
    "nome": "Feitiços Avançados",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "808909",
          "nome": "Katniss Everdeen"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-05T13:00:00",
            "dataHoraFim": "2026-08-05T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-12T13:00:00",
            "dataHoraFim": "2026-08-12T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12508-P",
    "nome": "Poções Avançadas",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "909010",
          "nome": "John Wick"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-06T13:00:00",
            "dataHoraFim": "2026-08-06T14:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-13T13:00:00",
            "dataHoraFim": "2026-08-13T14:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12509-P",
    "nome": "Transfiguração Avançada",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "010111",
          "nome": "Frodo Baggins"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-01T15:00:00",
            "dataHoraFim": "2026-08-01T16:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-08T15:00:00",
            "dataHoraFim": "2026-08-08T16:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  },
  {
    "codigo": "12510-P",
    "nome": "Magizoologia",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 30,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": {
          "RP": "111212",
          "nome": "Tyler Durden"
        },
        "agendaDeAulas": [
          {
            "dataHoraInicio": "2026-08-02T15:00:00",
            "dataHoraFim": "2026-08-02T16:40:00",
            "qtdeHorasAula": 2
          },
          {
            "dataHoraInicio": "2026-08-09T15:00:00",
            "dataHoraFim": "2026-08-09T16:40:00",
            "qtdeHorasAula": 2
          }
        ]
      }
    ]
  }
]


);
