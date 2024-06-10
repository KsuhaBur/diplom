// import React from 'react';
// import DynamicTable from '../Tables/Table';

// const columns = [
//     { id: 'number', label: 'Номер', accessor: 'number' },
//     { id: 'name', label: 'Название', accessor: 'name' },
//     { id: 'level_edu', label: 'Уровень образования', accessor: 'level_edu' },
//     { id: 'author', label: 'Руководитель', accessor: 'author' },
//     { id: 'date', label: 'Дата', accessor: 'date' },
//   ]

// const Control = ({ data }) => {
//   const rows = data.map((row, index) => (

//   );
// };

// export default Control;




import React, { useMemo} from 'react';
import { useTable } from 'react-table';

const data = [
    {
        "id":1,
        "themes":"Темы 1-6",
        "achievement":"ПК 1.2 - Обладает достаточными знаниями и навыками для решения прикладных производственных задач в области анализа и интеллектуальной обработки данных",
        "results":"Знает математические, естественно-научные и технические методы для решения основных, нестандартных задач создания и применения искусственного интеллекта.  Умеет адаптировать существующие математические, естественно-научные и социально-экономические методы для решения основных, нестандартных задач создания и применения искусственного интеллекта. Владеет методами обоснования выбора подходящих моделей и методов при выполнении исследований",
        "current_control":"Работа на практическом занятии; УО-1, ПР-2, ПР-13",
        "intermediate_certification":"Устный опрос, Экзамен",
    },

    {
        "id":2,
        "themes":"Темы 1-6",
        "achievement":"ПК 2.1 Знает глобальные технологические тренды и их изменение. Разбирается в основах программирования",
        "results":"Знает пакеты прикладных программ, относящиеся к профессиональной сфере Умеет разрабатывать оригинальные программные средства, в том числе с использованием современных информационно-коммуникационных и интеллектуальных компьютерных технологий Владеет методами проектирования и программирования интеллектуальных технологий",
        "current_control":"Работа на практическом занятии; УО-1, ПР-2, ПР-13",
        "intermediate_certification":"Устный опрос, Экзамен",
    },
    
]

const columns = [
    {
      Header: '№',
      accessor: 'id',
    },
    {
      Header: 'Контролируемые разделы/ темы дисциплины',
      accessor: 'themes',
    },
    {
      Header: 'Код и наименование индикатора достижения',
      accessor: 'achievement',
    },
    {
      Header: 'Результаты обучения',
      accessor: 'results',
    },
    {
      Header: 'Оценочные средства – наименование*',
      columns: [
        {
            Header: 'текущий контроль',
            accessor: 'current_control',
          },
          {
            Header: 'промежуточная аттестация',
            accessor: 'intermediate_certification',
          },
      ]
    },
    
  ];


function Control() {


    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = tableInstance
  return (
    <div>
        <h2 className="title">
            Контроль достижения целей курса
        </h2>
            <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}> 
                          {column.render('Header')}
                       </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                 prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                       {row.cells.map((cell) => {
                         return <td {...cell.getCellProps()}>
                          {cell.render('Cell')}</td>
                            })}
                    </tr>
                    )
                })
            }
        </tbody>
    </table>

    <p className="text">
    *Рекомендуемые формы оценочных средств:
1) собеседование (УО-1), коллоквиум (УО-2); доклад, сообщение (УО-3); круглый стол, дискуссия, полемика, диспут, дебаты (УО-4); и т.д.
2) тесты (ПР-1); контрольные работы (ПР-2), эссе (ПР-3), рефераты (ПР-4), курсовые работы (ПР-5); лабораторная работа (ПР-6); конспект (ПР-7); портфолио (ПР-8); проект (ПР-9); деловая и/или ролевая игра (ПР-10); кейс-задача (ПР-11); рабочая тетрадь (ПР-12); разноуровневые задачи и задания (ПР-13); расчетно – графическая работа (ПР-14); творческое задание (ПР-15) и т.д.
3) тренажер (ТС-1) и т.д.
    </p>

    </div>

  )
}

export default Control