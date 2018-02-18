<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePitchsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'pitchs';

    /**
     * Run the migrations.
     * @table pitchs
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('product_id');
            $table->text('pitch');
            $table->string('product_name', 100);
            $table->unsignedInteger('country_id');

            $table->index(["product_id"], 'fk_marketingPitchs_products1_idx');

            $table->index(["country_id"], 'fk_pitchs_countries1_idx');

            $table->unique(["product_id"], 'unique_marketingPitch');


            $table->foreign('product_id', 'fk_marketingPitchs_products1_idx')
                ->references('id')->on('products')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('country_id', 'fk_pitchs_countries1_idx')
                ->references('id')->on('countries')
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
