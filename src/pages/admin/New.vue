<template>
	<div>
    <div class="columns">
      <div class="column is-half">
        <form v-on:submit.prevent="saveProduct">
          <div class="field">
            <label for="name" class="label">
              Name
            </label>
            <input
              id="name"
              v-model="model.name"
              type="text"
              placeholder="Name"
              v-validate="'required'"
              name="name"
              class="input"
              v-bind:class="{'is-danger' : errors.has('name')}"
            >
            <p class="help is-danger" v-show="errors.has('name')">Name is required</p>
          </div>

          <div class="field">
            <label for="price" class="label">
              Price
            </label>
            <input
              id="price"
              v-model="model.price"
              type="number"
              placeholder="Price"
              v-validate="'required'"
              name="price"
              class="input"
              v-bind:class="{'is-danger' : errors.has('price')}"
            >
            <p class="help is-danger" v-show="errors.has('price')">Price is required</p>
          </div>

          <div class="field">
            <label for="manufacturer" class="label">
              Manufacturer
            </label>
            <input
              id="manufacturer"
              v-model="model.manufacturer"
              type="text"
              placeholder="Manufacturer"
              v-validate="'required'"
              name="manufacturer"
              class="input"
              v-bind:class="{'is-danger' : errors.has('manufacturer')}"
            >
            <p class="help is-danger" v-show="errors.has('manufacturer')">Manufacturer is required</p>
          </div>

          <div class="field">
            <label for="image" class="label">
              Image
            </label>
            <input
              id="image"
              v-model="model.image"
              type="text"
              placeholder="Image"
              v-validate="'required'"
              name="image"
              class="input"
              v-bind:class="{'is-danger' : errors.has('image')}"
            >
            <p class="help is-danger" v-show="errors.has('image')">Image is required</p>
          </div>

          <div class="field">
            <label for="description" class="label">
              Description
            </label>
            <textarea
              id="description"
              v-model="model.description"
              placeholder="Description"
              v-validate="'required'"
              name="description"
              class="input"
              v-bind:class="{'is-danger' : errors.has('description')}"
              cols="30"
              rows="30"
            >
            </textarea>
            <p class="help is-danger" v-show="errors.has('description')">Description is required</p>
          </div>
      
          <button class="button is-primary" type="submit">Sauvegarder</button>
        </form>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          name: null,
          price: null,
          manufacturer: null,
          image: null,
          description: null,
        },
      };
    },
    methods: {
      saveProduct() {
        // model
      },
    },
  };
</script>

<style lang="scss">
  $transition-duration: 300ms;

  .form-control {
    transition: border-color $transition-duration ease-in;

    &.error {
      transition: border-color $transition-duration ease-out;
      border-color: red;
    }
  }
</style>