<template>
  <div>
  	<div class="columns">
	  <div class="column">
	  	<aside class="menu">
	  		<p class="menu-label">
			Administration
			</p>
			<ul class="menu-list">
				<li><router-link to="/admin">View Products</router-link></li>
				<li><router-link to="/admin/new">New Product</router-link></li>
			</ul>
	  	</aside>
	  </div>
	  <div class="column is-four-fifths">
	  	<router-view></router-view>
	  </div>
	</div>
  </div>
</template>