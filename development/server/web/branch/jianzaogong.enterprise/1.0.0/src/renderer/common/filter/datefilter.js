//时间过滤器
import Vue from 'vue';
//引入moment
import moment from 'moment';
moment.locale('zh-cn');


export default Vue.filter('dateFilter', function (data, format) {
    //判断是否是字符串 function undefine
    if (data) {
        //是字符串就做日期转换
        //按照年月日 时分秒计算日期格式  YYYY-MM-DD
        return moment(data).format(format || 'YYYY-MM-DD')
    }else{
        //如果不是就将其返回出去
        return data;
    }
});