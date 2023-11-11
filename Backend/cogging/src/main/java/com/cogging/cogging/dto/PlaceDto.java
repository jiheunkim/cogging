package com.cogging.cogging.dto;

import com.cogging.cogging.entity.PlaceCategory;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceDto {

    private int id;
    private String name;
    private String address;
    private double latitude; // 위도
    private double longitude; // 경도
    private String placeCategory;
    private int scrapCount;

}
