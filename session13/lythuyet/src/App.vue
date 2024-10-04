<template>
  <div>
    <h1>Vuetify</h1>
    <v-btn color="success" >Click 1</v-btn>
    <button>Click 2</button>
    <v-text-field label="email"></v-text-field>
    <input type="text">
    <v-select 
    label="Phòng Ban"
    :items="[
      'Phòng đào tạo',
      'Phòng nhân sự',
      'phòng kế toán ',
      'phòng vận hành',
      'phòng bảo vệ'
    ]"></v-select>
    <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="12" md="5" lg="2">
        Cột 1
      </v-col>
      <v-col md="7" >
        Cột 2
      </v-col>
      <v-col md="12">
        Cột 3
      </v-col>
      <v-col>
        Cột 4
      </v-col>
      <v-col>
        Cột 5
      </v-col>
      <v-col>
        Cột 6
      </v-col>
      <v-col>
        Cột 7
      </v-col>
      <v-col>
        Cột 8
      </v-col>
      <v-col>
        Cột 9
      </v-col>
      <v-col>
        Cột 10
      </v-col>
      <v-col>
        Cột 11
      </v-col>
      <v-col>
        Cột 12
      </v-col>
    </v-row>

    <!-- <v-row no-gutters>
      <v-col cols="2">
        Cột 6
      </v-col>
      <v-col>
        Cột 7
      </v-col>
    </v-row> -->
  </v-container>
  <br>
  <br>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="12" md="6" offset-md="9" order="2">
       Cột 1
      </v-col>
      <v-col md="2" order="1">
        Cột 2
      </v-col>
    </v-row>
  </v-container>
  <!-- 
    responsive
    tương thích giữa các màn hình
    Nguyễn Thế 
  -->
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>