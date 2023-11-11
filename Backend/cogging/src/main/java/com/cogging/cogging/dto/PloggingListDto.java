package com.cogging.cogging.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PloggingListDto {
    private int id;
    private MemberDto memberDto;
    private String placeName;
    private String title;
    private LocalDateTime ploggingDate; // 플로깅 시간
    private int headcount; // 현재 참여 인원
    private String departures;
    private String arrivals;
}
