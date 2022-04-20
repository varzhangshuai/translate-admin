<template>
  <div class="wrap">
    <div id="region"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue'
let myChart = null
export default defineComponent({
  name: "Type",
  setup() {
    onMounted(() => {
      if (window.echarts) {
        myChart = window.echarts.init(document.getElementById('region'))// 指定图表的配置项和数据
        const option = {
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        formatter: params => {
          return (
              '{icon|▅}{name|' +params.name+ '}{value|' +
              params.value  + '}'
          );
        },
        rich: {
            icon: {
                fontSize: 16
            },
            name: {
                fontSize: 16,
                padding: [0, 10, 0, 4],
            },
            value: {
                fontSize: 16,
            }
        },
      }
    }
  ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      } 
    })
    onUnmounted(() => {
      myChart.dispose()
    })
  }

})
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }
  #region {
    min-height: 300px;
  }
</style>