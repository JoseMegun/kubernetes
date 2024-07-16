package com.inventary.enriqueta.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Data
@Document(collection = "payment_detail")
public class PaymentDetail {
    @Id
    private String id;

    @DBRef
    private Payment payment;

    @DBRef
    private Attorney maleAttorney;

    @DBRef
    private Attorney femaleAttorney;

    @DBRef
    private Student student;

    private String amount;
    private LocalDate date;
    private String paymentType;
    private String status;

    @Field("_class")
    private String className;
}
