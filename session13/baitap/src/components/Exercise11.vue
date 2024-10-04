<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-card outlined>
          <v-card-title>Filters</v-card-title>

          <v-card-subtitle>Gender</v-card-subtitle>
          <v-checkbox-group>
            <v-checkbox label="All"></v-checkbox>
            <v-checkbox label="Men"></v-checkbox>
            <v-checkbox label="Women"></v-checkbox>
          </v-checkbox-group>

          <v-divider></v-divider>

          <v-card-subtitle>Categories</v-card-subtitle>
          <v-checkbox-group>
            <v-checkbox label="All"></v-checkbox>
            <v-checkbox label="Kitchen"></v-checkbox>
            <v-checkbox label="Electronics"></v-checkbox>
          </v-checkbox-group>

          <v-divider></v-divider>

          <v-card-subtitle>Price</v-card-subtitle>
          <v-radio-group>
            <v-radio label="$10 - $50"></v-radio>
            <v-radio label="$50 - $100"></v-radio>
            <v-radio label="$100 - $150"></v-radio>
            <v-radio label="$150 - $200"></v-radio>
            <v-radio label="Over $200"></v-radio>
          </v-radio-group>

          <v-divider></v-divider>

          <v-card-subtitle>Rating</v-card-subtitle>
          <v-rating class="text-yellow-300" value="3" dense></v-rating>

          <v-btn color="primary" class="mt-4 ml-[100px] mb-[30px] ">Reset Filters</v-btn>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>MacBook Air Pro</v-card-title>
              <v-card-subtitle>
                <span>$15</span>
                <span class="text--disabled">$12</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Red Velvet Dress</v-card-title>
              <v-card-subtitle>
                <span>$16</span>
                <span class="text--disabled">$14.59</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Boat Headphone</v-card-title>
              <v-card-subtitle>
                <span>$36</span>
                <span class="text--disabled">$29</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>MacBook Air Pro</v-card-title>
              <v-card-subtitle>
                <span>$15</span>
                <span class="text--disabled">$12</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Red Velvet Dress</v-card-title>
              <v-card-subtitle>
                <span>$16</span>
                <span class="text--disabled">$14.59</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Boat Headphone</v-card-title>
              <v-card-subtitle>
                <span>$36</span>
                <span class="text--disabled">$29</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>MacBook Air Pro</v-card-title>
              <v-card-subtitle>
                <span>$15</span>
                <span class="text--disabled">$12</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Red Velvet Dress</v-card-title>
              <v-card-subtitle>
                <span>$16</span>
                <span class="text--disabled">$14.59</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmmgH9xv-utn8rCsdaAxA3Ujc1LkeoRVbaw&s" height="200px"></v-img>
              <v-card-title>Boat Headphone</v-card-title>
              <v-card-subtitle>
                <span>$36</span>
                <span class="text--disabled">$29</span>
              </v-card-subtitle>
              <v-rating class="text-yellow-300" value="4" dense></v-rating>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.text--disabled {
  text-decoration: line-through;
  color: grey;
}
</style>