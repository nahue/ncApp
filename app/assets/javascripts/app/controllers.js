angular.module('myApp.controllers', [])
  .controller('HomeController', function($scope, session, SessionService) {

    $scope.user = session.user;

  })
  .controller('EventsController', function($scope) {
    $scope.today = new Date();
    $scope.opts = {
        editable: {
            confirmation: "Esta seguro de eliminar este turno?"
        },
        messages: {
            views: {
                day: "Dia",
                week: "Semana",
                month: "Mes"
            },
            editor: {
                editorTitle: "Editar turno",
                title: "Titulo",
                start: "Inicio",
                end: "Fin",
                allDayEvent: "Todo el dia",
                repeat: "Repetir",
                description: "Descripcion"
            },
            recurrenceEditor: {
                frequencies: {
                    daily: "Diariamente",
                    monthly: "Mensualmente",
                    never: "Nunca",
                    weekly: "Semanalmente",
                    yearly: "Anualmente"
                },
                daily: {
                    repeatEvery: "Repetir cada: ",
                    interval: " dia(s)"
                },
                weekly: {
                    repeatEvery: "Repetir cada: ",
                    interval: " dia(s)"
                },
                end: {
                    never: " Nunca",
                    after: " DespuÃ©s de ",
                    occurrence: " ocurrencias(s).",
                    on: " En"
                }
            },
            event: "Turno",
            today: "Hoy",
            save: "Guardar",
            cancel: "Cancelar",
            destroy: "Eliminar",
            deleteWindowTitle: "Eliminar turno"
        },
        resources: [
            {
                field: 'Profesionales',
                dataSource: [
                    { text: 'Dr. Pepe Carioca', value: 1, color: 'green' },
                    { text: 'Kinesiologo Venique tetoco', value: 2, color: 'yellow' },
                ],
                title: 'Profesionales',
                multiple: true
            }
        ]
    };

    $scope.opts.dataSource = {
        batch: true,
        transport: {
            read: {
                url: "/api/v1/events.json",
                dataType: "jsonp"
            },
            update: {
                url: "/api/v1/events/update",
                dataType: "jsonp",
                type: 'PUT'
            },
            create: {
                url: "/api/v1/events",
                dataType: "jsonp",
                type: 'POST'
            },
            destroy: {
                url: "/api/v1/events/destroy",
                dataType: "jsonp",
                type: 'DELETE'
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "id", type: "number" },
                    title: { from: "title", defaultValue: "", validation: { required: true } },
                    start: { type: "date", from: "start" },
                    end: { type: "date", from: "end" },
                    startTimezone: { from: "startTimezone" },
                    endTimezone: { from: "endTimezone" },
                    description: { from: "description" },
                    recurrenceId: { from: "recurrenceId" },
                    recurrenceRule: { from: "recurrenceRule" },
                    recurrenceException: { from: "recurrenceException" },
                    isAllDay: { type: "boolean", from: "isAllDay" }
                }
            }
        }
    }
  });
