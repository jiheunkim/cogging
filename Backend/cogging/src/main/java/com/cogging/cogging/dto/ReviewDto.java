package com.cogging.cogging.dto;

import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Place;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {

    private String title;
    private String content;

}
