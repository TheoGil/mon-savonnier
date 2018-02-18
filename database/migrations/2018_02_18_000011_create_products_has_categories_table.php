<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsHasCategoriesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'products_has_categories';

    /**
     * Run the migrations.
     * @table products_has_categories
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('products_id');
            $table->unsignedInteger('categories_id');

            $table->index(["products_id"], 'fk_products_has_categories_products1_idx');

            $table->index(["categories_id"], 'fk_products_has_categories_categories1_idx');


            $table->foreign('products_id', 'fk_products_has_categories_products1_idx')
                ->references('id')->on('products')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('categories_id', 'fk_products_has_categories_categories1_idx')
                ->references('id')->on('categories')
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
