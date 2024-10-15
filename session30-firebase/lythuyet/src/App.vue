<template>
  <div>
    <h1>Firebase</h1>
    <input type="file" @change="handleChange" />
    <button @click="handleUpload">Upload</button><br />
    <img :src="downLoadURL" alt="" width="200" height="200" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "./firebase/config";

const image = ref("");
const downLoadURL = ref("");
const handleChange = (e) => {
  console.log("Gia tri", e.target.files[0]);
  image.value = e.target.files[0];
};
const handleUpload = async () => {
  try {
    const storageReference = storageRef(storage, `uploads/${image.value.name}`);
    await uploadBytes(storageReference, image.value);
    downLoadURL.value = await getDownloadURL(storageReference);
    console.log(downLoadURL);
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang=""></style>