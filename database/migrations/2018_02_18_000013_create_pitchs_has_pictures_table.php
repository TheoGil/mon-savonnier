<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePitchsHasPicturesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $set_schema_table = 'pitchs_has_pictures';

    /**
     * Run the migrations.
     * @table pitchs_has_pictures
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable($this->set_schema_table)) return;
        Schema::create($this->set_schema_table, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('pitchs_id');
            $table->unsignedInteger('pictures_id');
            $table->unsignedInteger('rank');

            $table->index(["pictures_id"], 'fk_pitchs_has_pictures_pictures1_idx');

            $table->index(["pitchs_id"], 'fk_pitchs_has_pictures_pitchs1_idx');


            $table->foreign('pitchs_id', 'fk_pitchs_has_pictures_pitchs1_idx')
                ->references('id')->on('pitchs')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('pictures_id', 'fk_pitchs_has_pictures_pictures1_idx')
                ->references('id')->on('pictures')
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
