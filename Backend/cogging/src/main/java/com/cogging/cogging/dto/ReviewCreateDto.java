package com.cogging.cogging.dto;

import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewCreateDto {

    private String title;
    private String content;
    private int placeId;

    public Review toEntity(Member member, Place place){
        return Review.builder()
                .place(place)
                .member(member)
                .title(title)
                .content(content)
                .createdAt(LocalDateTime.now())
                .build();
    }
}
