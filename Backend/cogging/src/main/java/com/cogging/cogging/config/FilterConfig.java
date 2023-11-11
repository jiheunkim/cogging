package com.cogging.cogging.config;

import com.cogging.cogging.filter.CrossDomainFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    //@SuppressWarnings({ "unchecked", "rawtypes" })
//    @Bean
//    public FilterRegistrationBean getCrossDomainFilterRegistrationBean() {
//        FilterRegistrationBean registrationBean = new FilterRegistrationBean(new CrossDomainFilter());
//        registrationBean.addUrlPatterns("/*");
//        return registrationBean;
//    }
}
