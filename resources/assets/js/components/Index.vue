<template>
<div class="system-list">
	<ul class="system" v-for="item in items">
		<li>
			<div class="background-image">
				<div class="xlay">
					<a href="#">{{ item.Name }}</a>
				</div>
			</div>
			<div class="detail">
				<div class="introduce">{{ item.Introduce }}</div>
				<div class="Password">{{ item.Password }}</div>
				<div class="Contact">{{ item.Contact }}</div>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
  export default{
	el:'#list',
    data () {
      jsondata;
    },
	methods:{
		jsdata:function(){
			var _this = this;
			this.$http.get("js/data.json").then(function (res) {
				jsondata = res.body.list;
			});
			}
		}
	}
</script>

<style>
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    display: table;
    font-weight: 100;
    font-family: 'Lato';
  }

  .container {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }

  .content {
    text-align: center;
    display: inline-block;
  }

  .title {
    font-size: 96px;
  }

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
