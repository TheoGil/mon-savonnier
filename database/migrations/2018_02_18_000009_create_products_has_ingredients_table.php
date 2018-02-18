<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsHasIngredientsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'products_has_ingredients';

    /**
     * Run the migrations.
     * @table products_has_ingredients
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('ingredient_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('rank');
            $table->unsignedTinyInteger('is_organic')->default('0');

            $table->index(["product_id"], 'fk_ingredients_has_products_products1_idx');

            $table->index(["ingredient_id"], 'fk_ingredients_has_products_ingredients1_idx');


            $table->foreign('ingredient_id', 'fk_ingredients_has_products_ingredients1_idx')
                ->references('id')->on('ingredients')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('product_id', 'fk_ingredients_has_products_products1_idx')
                ->references('id')->on('products')
                ->onDelete('no action')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
       Schema::dropIfExists($this->set_schema_table);
     }
}
