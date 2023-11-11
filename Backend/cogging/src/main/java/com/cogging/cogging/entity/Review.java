package com.cogging.cogging.entity;

import com.cogging.cogging.dto.CommunityDto;
import com.cogging.cogging.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "review")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    private String title;

    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public ReviewDto toDto(){
        return ReviewDto.builder()
                .title(title)
                .content(content)
                .build();
    }
}
