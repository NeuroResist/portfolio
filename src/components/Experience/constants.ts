import { IExperience } from "./interface";

export const WORKS: IExperience[] = [
  {
    period: "1 год 5 месяцев",
    from: { startDate: "2022-01-26", startTime: "Январь 2022" },
    to: { startDate: undefined, endTime: undefined },
    isEnd: false,
    companyName: "Лига Цифровой Экономики",
    city: "Воронеж",
    site: "www.digitalleague.ru",
    position: "Frontend-разработчик",
    descriptions: [
      "Разрабатывал frontend-часть проекта для МинСпорта: Сделал реестры записей, карточку пользователя, формы для создания записей, UI-компоненты. Подключил бэкенд к частям проекта, рефакторил старый код, правил баги, реализовывал бизнес-логику и адаптивность под разные девайсы.",
      "Привнес новые идеи для повышения эффективности работы команды, через взаимодействие с дизайнерами сделал улучшения UI, а с аналитиками - удобный шаблон для постановки задач.",
    ],
  },
];