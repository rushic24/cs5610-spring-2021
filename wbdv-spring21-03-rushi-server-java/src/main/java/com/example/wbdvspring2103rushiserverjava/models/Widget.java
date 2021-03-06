package com.example.wbdvspring2103rushiserverjava.models;

//import javax.persistence.*;

import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String topicId;
    private String name;
    private String type;
    private Integer widgetOrder;
    private String text;
    private String src;
    private Integer size;
    private Integer width;
    private Integer height;
    private String cssClass;
    private String style;
    private String value;
    private Boolean ordered;


    public Widget(Long id, String topicId, String name, String type, Integer widgetOrder, String text, String src, Integer size, Integer width, Integer height, String cssClass, String style, String value) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.widgetOrder = widgetOrder;
        this.topicId = topicId;
        this.text = text;
        this.src = src;
        this.size = size;
        this.width = width;
        this.height = height;
        this.cssClass = cssClass;
        this.style = style;
        this.value = value;
    }

    public Widget() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getWidgetOrder() {
        return widgetOrder;
    }

    public void setWidgetOrder(Integer widgetOrder) {
        this.widgetOrder = widgetOrder;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getCssClass() {
        return cssClass;
    }

    public void setCssClass(String cssClass) {
        this.cssClass = cssClass;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    public Boolean getOrdered() {
        return ordered;
    }

    public void setOrdered(Boolean ordered) {
        this.ordered = ordered;
    }
}


/*
    create table widget (
       id bigint not null,
        height integer,
        size integer,
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        width integer,
        primary key (id)
    ) engine=InnoDB
 */

/*
create table widgets (
       id bigint not null auto_increment,
        height integer,
        size integer,
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        width integer,
        primary key (id)
    ) engine=InnoDB
 */

/*1
    alter table widgets
       add column name varchar(255)
 */