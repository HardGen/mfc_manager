import React from 'react';
import { Menu } from 'antd';


const Nav: React.FC = () => {

    return (

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: 'Команды',
              },
              {
                key: '6',
                label: 'Игроки',
              },
              {
                key: '2',
                label: 'Бюджеты',
              },
              {
                key: '3',
                label: 'Расписание игр',
              },
              {
                key: '4',
                label: 'Результаты',
              },
              {
                key: '7',
                label: 'Справочники',
              },
              {
                key: '5',
                label: 'Настойки',
              },
            ]}
          />
    );
  };
  
  export default Nav;