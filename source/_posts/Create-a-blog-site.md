---
layout: post	#布局	
title: First hexo page	#标题	文章的文件名
date: 2020-03-01 11:21:21       	#建立日期	文件建立日期
updated: 2020-03-02 11:21:21        #更新日期	文件更新日期
comments: true	#开启文章的评论功能	true
tags:	#标签（不适用于分页）	
    - TagA
    - TagB
categories:	#分类（不适用于分页）	
    - [Develop, Node.js]
    - [Develop, Java]
    - [Develop, Java, Back-end]
permalink: false	#覆盖文章网址	
---

# 内容
> hahah : 


# 插入一块代码

``` java
package com.shiyl.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ServiceDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceDemoApplication.class, args);
    }

}
```

# 再来一段代码

``` java ToolsAsfServiceApplication.java https://gitee.com/shiyunlai/TTT/blob/master/tools-asf-service/src/main/java/org/tis/tools/asf/ToolsAsfServiceApplication.java github

package org.tis.tools.asf;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * <pre>
 * Tools ASF Micro-Service 启动入口.
 * 基于Spring Boot,以jar方式启动
 * </pre>
 *
 * @author Shiyunlai
 * @since 2018-03-02
 */
@SpringBootApplication
@ComponentScan("org.tis.tools")
public class ToolsAsfServiceApplication {

    private final static Logger logger = LoggerFactory.getLogger(ToolsAsfServiceApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ToolsAsfServiceApplication.class, args);
        logger.info("Tools ASF Service Start Success!");
    }
}

```

# 一个注意

>注意：阿咖啡机阿斯利康放假了

# 一个 blockquote

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

# 一个链接

[shiyunlai's blog](http://shiyunlai.github.io)

# include code

{% include_code lang:javascript from:1 to:20 a.js %}


# Raw

{% raw %}
content
{% endraw %}
