<template>
  <v-container>
    <v-row>
      <!-- Basic Layout -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Basic Layout</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Name"></v-text-field>
              <v-text-field label="Company"></v-text-field>
              <v-text-field label="Email"></v-text-field>
              <v-text-field label="Phone No"></v-text-field>
              <v-textarea label="Message"></v-textarea>
              <v-btn color="primary">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Basic with Icons</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field 
                label="Name"
                prepend-inner-icon="mdi-account">
              </v-text-field>
              
              <v-text-field 
                label="Company"
                prepend-inner-icon="mdi-domain">
              </v-text-field>
              
              <v-text-field 
                label="Email" 
                prepend-inner-icon="mdi-email">
              </v-text-field>
              
              <v-text-field 
                label="Phone No" 
                prepend-inner-icon="mdi-phone">
              </v-text-field>
              
              <v-textarea 
                label="Message" 
                prepend-inner-icon="mdi-message-text">
              </v-textarea>
              
              <v-btn color="primary">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.v-card {
  padding: 20px;
  margin-top: 20px;
}
</style>
