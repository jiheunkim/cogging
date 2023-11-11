package com.cogging.cogging.dto;

import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommunityDto {

    private int id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private int comments;
    private MemberDto author;
}
