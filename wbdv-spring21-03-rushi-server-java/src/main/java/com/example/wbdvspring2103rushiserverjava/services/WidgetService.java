package com.example.wbdvspring2103rushiserverjava.services;

import com.example.wbdvspring2103rushiserverjava.models.Widget;
import com.example.wbdvspring2103rushiserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();
    {
//        Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, "Welcome to Widgets");
//        Widget w2 = new Widget(234l, "ABC234", "PARAGRAPH", 1, "This is a paragraph");
//        Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, "Welcome to WebDev");
//        Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, "Lorem ipsum");
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
    }
    @Autowired
    WidgetRepository repository;

    public Widget createWidget(String tid, Widget widget){
        widget.setTopicId(tid);
//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;

        return repository.save(widget);
    }

    public List<Widget> findWidgetsForTopic(String tid) {
//        List<Widget> ws = new ArrayList<>();
//        for(Widget w: widgets) {
//            if (w.getTopicId().equals(tid)){
//                ws.add(w);
//            }
//        }
//        return ws;
        return repository.findWidgetsForTopic(tid);

    }

    public int updateWidget(Long wid, Widget widget) {
//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(wid)) {
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return 0;
        Widget originalWidget = findWidgetById(wid);

        originalWidget.setText(widget.getText());
        originalWidget.setTopicId(widget.getTopicId());
        originalWidget.setId(widget.getId());
        originalWidget.setSize(widget.getSize());
        originalWidget.setType(widget.getType());
        originalWidget.setSrc(widget.getSrc());
        originalWidget.setWidth(widget.getWidth());
        originalWidget.setHeight(widget.getHeight());
        originalWidget.setOrdered(widget.getOrdered());

        repository.save(originalWidget);
        return 1;
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
        return 1;
//        int index = -1;
//        for(int i=0; i<widgets.size(); i++) {
//            Widget w = widgets.get(i);
//            if(w.getId().equals(id)) {
//                index = i;
//            }
//        }
//        if(index >= 0) {
//            widgets.remove(index);
//            return 1;
//        }
//        return 0;
    }

    public List<Widget> findAllWidgets() {
//        return widgets;
        return repository.findAllWidgets();
    }

    public Widget findWidgetById(Long id) {
//        for(Widget w: widgets) {
//            if(w.getId().equals(id)) {
//                return w;
//            }
//        }
//        return null;
        return repository.findWidgetById(id);
    }
}
