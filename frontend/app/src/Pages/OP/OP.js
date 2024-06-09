import React from 'react';
import DynamicTable from '../../components/Tables/Table';

const exampleData = [
  {
    op: 'Прикладная математика и информатика',
    year_of_recruitment: '2024',
    level_edu: 'Бакалавриат',
    profile: 'Системное программирование'
},
{
    op: 'Прикладная информатика',
    year_of_recruitment: '2024',
    level_edu: 'Бакалавриат',
    profile: 'Разработка и управлние цифровыми продуктами'
},
{
  op: 'Горное дело',
  year_of_recruitment: '2024',
  level_edu: 'Специалитет',
  profile: 'Шахтное и подземное строительство'
},
];

const columns = [
  { id: 'op', label: 'Образовательная программа', accessor: 'op' },
  { id: 'year_of_recruitment', label: 'Год набора', accessor: 'year_of_recruitment' },
  { id: 'level_edu', label: 'Уровень образования', accessor: 'level_edu' },
  { id: 'profile', label: 'Направление', accessor: 'profile' },
]

export default function OP() {
  return (
    <div className=''>
      <div>
        <DynamicTable data={exampleData} columns={columns} /> 
      </div>
      {/* Сделать кнопку по добавлению образовательной программы */}
    </div>
  )
}
