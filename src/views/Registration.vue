<template>
    
    <div class="registration">

  <el-form :model="user" status-icon  label-width="120px" class="demo-ruleForm">
  <el-form-item label="Name" prop="name">
    <el-input type="name" v-model="user.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Email" prop="email">
    <el-input type="email" v-model="user.email" autocomplete="off"></el-input>
  </el-form-item>
 <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="user.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitUser">Submit</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>

    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
    //   var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('Please input the password'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('Please input digits'));
    //       } else {
    //         if (value < 18) {
    //           callback(new Error('Age must be greater than 18'));
    //         } else {
    //           callback();
    //         }
    //       }
    //     }, 1000);
    //   };
    //   var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('Please input the password'));
    //     } else {
    //       if (this.ruleForm.checkPass !== '') {
    //         this.$refs.ruleForm.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    //   var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('Please input the password again'));
    //     } else if (value !== this.ruleForm.pass) {
    //       callback(new Error('Two inputs don\'t match!'));
    //     } else {
    //       callback();
    //     }
    //   };
      return {
        // ruleForm: {
        //   name: '',
        //   email: '',
        //   pass: ''
        // },
        user: { 
          name: '',
          email: '',
          pass: ''
        },
        // rules: {
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' }
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur' }
        //   ],
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
        // }
      };
    },
    methods: {
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ...mapActions(["sendUser"]),
      submitUser() {
         this.sendUser({ user: this.user  });
         console.log()
      }
    }
  };
  </script>