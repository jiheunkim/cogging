package com.cogging.cogging.dto;

import lombok.*;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {
    private String email;
    private String nickname;
    private int profileImage;
    private int participation;
}
