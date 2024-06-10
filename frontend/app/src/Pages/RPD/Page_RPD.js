import React from 'react';
import Buttons from '../../components/Buttons/Buttons';
import List from '../../components/List/List';
import Laboriousness from '../../components/Discipline/Laboriousness';
import Structure from '../../components/Discipline/Structure';
import Theory from '../../components/Discipline/Theory';
import Practice from '../../components/Discipline/Practice';
import Control from '../../components/Discipline/Control';
import EduMethodSupply from '../../components/Discipline/EduMethodSupply';

const data = {
    disciplineName: 'Программирование на JavaScript',
    supervisor: 'Иванов И.И.',
    studyDirection: 'Прикладная информатика',
    structuralUnit: 'Кафедра информационных технологий',
    trainingForm: 'Очная',
    educationLevel: 'Бакалавриат',
    implementationLanguage: 'русский',
    numberOfSemesters: '4',
  };

  const keysObject = {
    disciplineName: 'Информация по дисциплине',
    supervisor: 'Руководитель',
    studyDirection: 'Направление',
    structuralUnit: 'Структурное поздразделение',
    trainingForm: 'Форма обучение',
    educationLevel: 'Уровень образования',
    implementationLanguage: 'Язык реализации',
    numberOfSemesters: 'Количество семестров'
  }

  const keysO = {
    purpose: "Цель",
    tasks: "Задачи",
    know: "Знать",
    able : "Уметь",
    skills: "Иметь навыки и (или) опыт деятельности (владеть)",
    connection: "Связь курса с другими дисциплинами",
    
  }

  const valuesO = {
    purpose: "изучение основных разделов теории машинного обучения (Machine Learning) и овладение навыками практического решения задач интеллектуального анализа данных - майнинга данных (Data Mining). ",
    tasks: ["Изучить основные инструменты математического анализа, линейной алгебры, методов оптимизации и теории вероятностей;",
       "Получить базовые навыки программирования на языках С++ и Python применительно к работе с большими объемами данных;",
      "Изучить основные модели машинного обучения и методики оценки их качества;",
    "Изучить основные способы организации искусственных нейронных сетей;",
  "Овладеть методологией управления data-science проектами;"],
    know: ["современное состояние исследований в области машинного обучения;",
      "принципы построения систем машинного обучения;",
      "модели представления и описания технологий машинного обучения."
    ],
    able : [
      "проводить анализ предметной области;",
      "определять назначение, выбирать методы и средства для построения систем машинного обучения;",
      "строить системы машинного обучения"
    ],
    skills: [
        "использования аппарата простейшего анализ данных",
        "применения методов классификации информации",
        "реализации алгоритмов машинного обучения"
        ],
    connection: "Для успешного изучения дисциплины «Методы машинного обучения» необходимы знания базовой программы курса «Высшая математика» и основ программирования (желательно Python).",
  }

 const laboriousness = {
    credits: 3,
  }

  const data1 = [
    { Наименование: 'Тема 1.', Количество_часов: 2, Формы_промежуточной_аттестации: 6 },
    { Наименование: 'Тема 2.', Количество_часов: 2, Формы_промежуточной_аттестации: 6 },
    // ... другие данные
  ];

  const theory = {
    theory: "Лекции не предусмотрены"
  }

  const practice = {
    practice: "Занятие 1. Работа с текстом (6 час.) Задачи обработки текста: извлечение, поиск, классификация (тематическая, эмоциональная), перевод. Разбиение на слова, пунктуация, лексический и морфологический анализ. Определение частей речи, имён, основ слов. Частотный анализ, представление bag-of-words, TF-IDF и его варианты. N-грамы, byte-pair encoding. Векторные представления, семантическая интерпретация алгебраических операций. Унитарный код (One-hot encoding). Алгоритмы Word2Vec и FastText. Алгоритм GloVe*.Занятие 2. Снижение размерности (6 час.) Постановка задачи, причины и цели снижения размерности. Выбор и извлечение признаков. Подходы к выбору признаков: filtering, wrapping, embedding. Расстояние между распределениями. Расстояние Кульбака-Лейблера. Взаимная информация. Алгоритмы выбора признаков: на основе корреляции (CFS), взаимной информации, Relief. Метод главных компонент (PCA). Нелинейные обобщения метода главных компонент. Kernel PCA. Неотрицательное матричное разложение (NMF). Стохастическое вложение соседей с t-распределением (t-SNE)."
  }





export default function Page_RPD() {


    const [components] = React.useState([
        { label: 'Описание', component: <List keysObject={keysObject} valuesObject={data}/>  },
        { label: 'Цели и задачи', component: <List keysObject={keysO} valuesObject={valuesO} /> },
        { label: 'Трудоёмкость', component: <Laboriousness value={laboriousness}/>  },
        { label: 'Структура', component: <Structure data={data1} /> },
        { label: 'Теоретическая часть', component: <Theory value={theory}/>  },
        { label: 'Практическая часть', component: <Practice props={practice} /> },
        { label: 'Контроль достижения целей курса', component: <Control />  },
        { label: 'Учебно-методическое обеспечение', component: <EduMethodSupply /> },
        { label: 'Список литературы', component: <List keysObject={keysObject} valuesObject={data}/>  },
        { label: 'Методические указания', component: <List keysObject={keysO} valuesObject={valuesO} /> },
        { label: 'Материально-техническое обеспечение дисциплины', component: <List keysObject={keysObject} valuesObject={data}/>  },
      ]);
      const [activeComponentIndex, setActiveComponentIndex] = React.useState(0);
    
        const handleClick = (index) => {
          setActiveComponentIndex(index);
        };
  return (

    <div className='button-container'>
     
      <Buttons components={components} activeComponentIndex={activeComponentIndex} handleClick={handleClick} />
      <div className="component-container">{components[activeComponentIndex].component}</div>
    </div>
    
  )
}
