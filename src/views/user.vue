<!--个人中心-->
<template>
	<div>
		<div class="page-wrap">
			<group>
				<cell title="我的任务" link="/user/my/task"></cell>
				<cell title="我的评论" link="/user/my/comment"></cell>
				<cell title="我的发布" link="/user/my/issue"></cell>
				<cell title="设置" link="/user/setting"></cell>
			</group>
		</div>
	</div>
</template>

<script>
import { Group, Cell } from 'vux'
// import { mapActions } from 'vuex'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      model: {
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
