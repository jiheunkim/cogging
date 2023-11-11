package com.cogging.cogging.dto;

import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.entity.Plogging;
import jakarta.validation.constraints.Max;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PloggingCreateDto {

    private int placeId;
    private String title;
    private String content;
    private LocalDateTime ploggingDate;
    private int maximumPeople;
    private String departures; // 출발지
    private String arrivals;   // 도착지
    private String chatUrl;

    public Plogging toEntity(Member member, Place place){
        return Plogging.builder()
                .member(member)
                .place(place)
                .title(title)
                .content(content)
                .createdAt(LocalDateTime.now())
                .ploggingDate(ploggingDate)
                .maximumPeople(maximumPeople)
                .departures(departures)
                .arrivals(arrivals)
                .chatUrl(chatUrl)
                .build();
    }
}
