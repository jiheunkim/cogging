package com.cogging.cogging.entity;

import com.cogging.cogging.dto.MemberDto;
import com.cogging.cogging.dto.PlaceDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "place")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String address;

    private double latitude; // 위도

    private double longitude; // 경도

    @ManyToOne
    @JoinColumn(name = "place_category_id")
    private PlaceCategory placeCategory;

    @Formula("(select count(*) from scrap s where s.place_id = id)")
    private int scrapCount;

    public PlaceDto toDto(){
        return PlaceDto.builder()
                .id(id)
                .name(name)
                .address(address)
                .latitude(latitude)
                .longitude(longitude)
                .placeCategory(placeCategory.getName())
                .scrapCount(scrapCount)
                .build();
    }

}
