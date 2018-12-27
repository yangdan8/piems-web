import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export class HelloWorld extends Vue {
  @Prop() private msg!: string;
  showMsg() {
    alert(this.msg);
  }
}
