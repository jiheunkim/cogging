package com.cogging.cogging.repository;

import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommunityRepository extends JpaRepository<Community, Integer> {
    List<Community> findAll(Sort sort);
    Optional<Community> findById(Integer integer);
    List<Community> findByMemberIdOrderByCreatedAtDesc(int memberId);
}
