<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{message}}</p>
    <div>{{mssg}}</div>
    <!-- <p v-text="message"></p> -->
  </div>
</template>

<script>
export default {
  name: "functional",
/*   data: ()=>(
    {
      message:'message data Hi'
    }
  ) */
    data: ()=>({
mssg:{
  
      message:'message data Hi'
    }
    
  })
}
</script>

