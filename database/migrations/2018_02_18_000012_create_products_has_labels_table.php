<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsHasLabelsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'products_has_labels';

    /**
     * Run the migrations.
     * @table products_has_labels
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('product_id');
            $table->unsignedInteger('label_id');

            $table->index(["label_id"], 'fk_products_has_labels_labels1_idx');

            $table->index(["product_id"], 'fk_products_has_labels_products1_idx');


            $table->foreign('product_id', 'fk_products_has_labels_products1_idx')
                ->references('id')->on('products')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('label_id', 'fk_products_has_labels_labels1_idx')
                ->references('id')->on('labels')
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
