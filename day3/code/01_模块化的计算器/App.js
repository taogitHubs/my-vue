import Cal from './Cal.js';
export default {
    template:`
        <div>
            我是app，下面是使用计算器组件<br/>
            <my-cal></my-cal>
        </div>
    `,
    components:{
        'my-cal':Cal
    }
}