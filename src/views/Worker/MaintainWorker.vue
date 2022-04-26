<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-search">
        <el-input v-model="query.input" placeholder="姓名"></el-input>
        <el-input class="search-btn" v-model="query.phone" placeholder="手机号"></el-input>
        <el-select class="search-btn" v-model="query.status" placeholder="请选择">
					<el-option v-for="item in statusData" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="getTableData(true)">搜索</el-button>
      </div>
      <div class="layout-container-form-handle">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">添加</el-button>
        <el-popconfirm title="删除" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" icon="el-icon-delete" :disabled="chooseData.length === 0">删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="名称" align="center" />
        <el-table-column prop="number" label="数字" align="center" />
        <el-table-column prop="choose" label="选择器" align="center" />
        <el-table-column prop="radio" label="单选框" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="删除" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Table from '@/components/table/index.vue'
import { getData, del } from '@/api/table'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: '',
      phone: '',
      status: 1
    })
    const statusData = ref([{
      value: 0,
      label: '未启用'
    }, {
      value: 1,
      label: '启用'
    }])
    // 弹窗控制器

    // 分页参数, 供table使用
    const page = reactive({
      index: 1,
      size: 20,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    const chooseData = ref([])
    const handleSelectionChange = (val) => {
      chooseData.value = val
    }
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getData(params)
      .then(res => {
        tableData.value = res.data.list
        page.total = Number(res.data.pager.total)
      })
      .catch(error => {
        tableData.value = []
        page.index = 1
        page.total = 0
      })
      .finally(() => {
        loading.value = false
      })
    }
    // 删除功能
    const handleDel = (data) => {
      let params = {
        ids: data.map((e)=> {
          return e.id
        }).join(',')
      }
      del(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        getTableData(tableData.value.length === 1 ? true : false)
      })
    }

    const router = useRouter()
    const route = useRoute()
    // 新增功能
    const handleAdd = () => {
      console.log('新增数据')
      router.push({
        path: './UserEdit',
        query: {
          id: 0
        },
      })
    }
    // 编辑功能
    const handleEdit = (row) => {
      console.log('编辑数据')
      router.push({
        path: './UserEdit',
        query: row
      })
    }
    getTableData(true)
    return {
      query,
      statusData,
      tableData,
      chooseData,
      loading,
      page,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData
    }
  }
})
</script>

<style lang="scss" scoped>

</style>