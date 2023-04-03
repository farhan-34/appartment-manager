import React from 'react'
import { HOC } from '../../components/HOC'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import EnhancedTable from '../../components/Table'

const Home = () => {
  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: ''
    },
    plotOptions: {
      line: {
        showInLegend: true
      }
    },
    yAxis: {
      title: '',
    },
    credits: {
      enable: false
    },
    series: [{
      type: 'column',
      name: 'Estimated Spending',
      color: '#04c4c4',
      data: [1, 2, 3, 4, 4, 5, 5, 2, 7, 4, 5]
    }]
  }
  return (
    <HOC>
      <div>
        <div className='grid grid-cols-12 gap-4 justify-between'>
          <div className='col-span-4 items-center border rounded shadow bg-white w-2/4 mr-auto'>
            <p>Overall spending</p>

          </div>

          <div className='col-span-4 items-center border rounded shadow bg-white w-2/4 mx-auto'>
            <p>Expected Spending</p>
          </div>

          <div className='col-span-4 items-center border rounded shadow bg-white w-2/4 ml-auto'>
            <p>Budgetting graphs</p>
          </div>
        </div>

        <div className='w-full my-5 bg-white rounded shadow p-4'>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-8 bg-white rounded shadow p-4'>
            <EnhancedTable />
          </div>

          <div className='col-span-4 bg-white rounded shadow p-4'>
            Notifications here
          </div>


        </div>
      </div>
    </HOC>

    
  )
}

export default Home